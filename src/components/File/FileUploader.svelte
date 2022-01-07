<script>
import Dropzone from "svelte-file-dropzone";
import Fa from 'svelte-fa/src/fa.svelte'

import { Spinner, Button, Row,Col, Input } from 'sveltestrap';
import { createEventDispatcher } from 'svelte';
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faSave } from '@fortawesome/free-regular-svg-icons'
import { faFileUpload } from '@fortawesome/free-solid-svg-icons'

import FileInfo from './FileInfo.svelte'

let bt

export let id=0;
export let version=1;

import { onMount }from 'svelte'

// export let description="";
// export let status=0;

//action to load fileupload model
export let start="";
//action to save selected file 
export let submit="";


export let data=null;
$:model = null;

const dispatch = createEventDispatcher();

// dropzone model
$:files = {
    accepted: [],
    rejected: []
  };

onMount(async () => {
  if(data==null)
  {
    load();
  }
  else
  {
    model = data;    
  }
})

// load modal from server 
async function load()
{
  let url = start+"?id="+id+"&version="+version;

  // load menu froms server
  const res = await fetch(url);
  model = await res.json();
  
  console.log(model);

  //setup form

}

function handleFilesSelect(e) {
  const { acceptedFiles, fileRejections } = e.detail;
  files.accepted = [...files.accepted, ...acceptedFiles];
  files.rejected = [...files.rejected, ...fileRejections];

  if(fileRejections.length>0)
  {
    alert("the dropped file is not supported");
    console.log("the dropped file is not supported");

    // list up the errors somewhere
  }

  document.getElementById("submit").click(); 

}

function handleRemoveFile(e, index) {
    files.accepted.splice(index, 1);
    files.accepted = [...files.accepted];
  }

function handleRemoveAll()
{
  files.accepted = [];
}

async function handleSubmit() {

    console.log("start submit");

    let url = submit+"?id="+id;
  
    if (files.accepted.length > 0) {

      const formData = new FormData();
      // Looping over all files and add it to FormData object  
      for (var i = 0; i < files.accepted.length; i++) {  
          formData.append(files.accepted[i].name, files.accepted[i]);  
      }  

      const response = await fetch(url, {
        method: "POST",
        body: formData
      });
      console.log(response);
      if(response.status==200)
      {
        dispatch('submit');
        files.accepted = [];
      }
      
    }
  }

</script>
<form on:submit|preventDefault={handleSubmit}>
    {#if model}
      <!--if model exist  -->
      <Row>
        <Dropzone
          on:drop={handleFilesSelect} 
          accept={model.Accept}
          multipe={model.multipe}>
          <Fa icon={faFileUpload}/>
          <span>Drag 'n' drop some files here, or click to select files</span>
          <span>
            {#if model.Accept}
              {#each model.Accept as ext}
              {ext} 
              {/each}
            {/if}
          </span>
        </Dropzone>
      </Row> 

      <Button id="submit" color="primary" type="submit" style="display:none"><Fa icon={faSave}/></Button>      
      


    {:else} <!-- while data is not loaded show a loading information -->

    <Spinner color="info" size="sm" type ="grow" text-center />
    {/if}

</form>

