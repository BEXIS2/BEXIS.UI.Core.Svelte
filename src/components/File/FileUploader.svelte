<script>
import Dropzone from "svelte-file-dropzone";
import Fa from 'svelte-fa/src/fa.svelte'

import { Spinner, Button, Row,Col, Input } from 'sveltestrap';
import { createEventDispatcher } from 'svelte';
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faSave } from '@fortawesome/free-regular-svg-icons'
import { faFileUpload } from '@fortawesome/free-solid-svg-icons'

import { Api } from '../../services/Api'

export let id=0;
export let version=1;

import { onMount }from 'svelte'

// export let description="";
// export let status=0;

//action to load fileupload model
export let start="";
//action to save selected file 
export let submit="";

export let context="";

export let data=null;


$:model = null;
$:submitBt ="submit";

let maxSize=0;

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

  submitBt += context;
  maxSize = (model.maxSize*1024)*1024

})

// load modal from server 
async function load()
{
  let url = start+"?id="+id+"&version="+version;
  
  // load menu froms server
  const res = await Api.get(url);
  model = await res.json();

}

function handleFilesSelect(e) {
  const { acceptedFiles, fileRejections } = e.detail;
  files.accepted = [...files.accepted, ...acceptedFiles];
  files.rejected = [...files.rejected, ...fileRejections];

  if(fileRejections.length>0)
  {
    //alert("the dropped file is not supported");
    console.log("the dropped file is not supported.");
    console.log(files.rejected);

    let messages = [];
    
    for (let index = 0; index < fileRejections.length; index++) {
      const element = fileRejections[index];
      messages.push(getErrorMessage(element))
    }

    console.log(messages);
    
    dispatch("error", {messages})
    //list up the errors somewhere
    files.rejected = []
  }

  if(acceptedFiles.length>0)
  {
    document.getElementById(submitBt).click(); 
  }

}

function getErrorMessage(rejected)
{
  let message = "";
  message = rejected.file.path+" : ";
  let errors = rejected.errors;
  for (let index = 0; index < errors.length; index++) {
    const error = errors[index];
    message+=error.message
  }

  return message;
}

async function handleSubmit() {

    dispatch('submit')

    let url = submit+"?id="+id;

    console.log(model);
    console.log(url);

    if (files.accepted.length > 0) {

      const formData = new FormData();
      // Looping over all files and add it to FormData object  
      for (var i = 0; i < files.accepted.length; i++) {  
          formData.append(files.accepted[i].name, files.accepted[i]);  
      }  
      
      const response = await Api.post(url, formData);
      console.log(response);
      if(response.status==200)
      {
        dispatch('submited');

        let message = files.accepted.length +" is/are uploaded";
        dispatch('success', {text:message})

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
          accept={model.accept}
          multiple={model.multiple}
          {maxSize}>

          <b style="font-size:xx-large"><Fa icon={faFileUpload}/></b>
          <span><b>Drag 'n' drop some files here, or click to select files</b>
          <b>max file : {model.maxSize} mb</b></span>
          <p>
            {#if model.accept}
              {#each model.accept as ext}
              {ext} ,   
              {/each}
            {/if}
          </p>
        </Dropzone>
      </Row> 

      <Button id="{submitBt}" color="primary" style="display:none" ><Fa icon={faSave}/></Button>      

    {:else} <!-- while data is not loaded show a loading information -->

    <Spinner color="info" size="sm" type ="grow" text-center />
    {/if}

</form>

