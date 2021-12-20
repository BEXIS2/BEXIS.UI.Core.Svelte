<script>
import Fa from 'svelte-fa/src/fa.svelte'
import { faFileAudio } from '@fortawesome/free-solid-svg-icons'
import { faFileVideo } from '@fortawesome/free-solid-svg-icons'
import { faFileWord } from '@fortawesome/free-solid-svg-icons'
import { faFilePdf } from '@fortawesome/free-solid-svg-icons'
import { faFileExcel } from '@fortawesome/free-solid-svg-icons'
import { faFileCsv } from '@fortawesome/free-solid-svg-icons'
import { faFileImage } from '@fortawesome/free-solid-svg-icons'
import { faFileArchive } from '@fortawesome/free-solid-svg-icons'

 export let type = "";
 
</script>

{#if type.includes("excel")}
  <Fa icon={faFileExcel} />
{/if}

{#if type.includes("text")}
  <Fa icon={faFileCsv} />
{/if}

{#if type.includes("image")}
  <Fa icon={faFileImage} />
{/if}

{#if type.includes("audio")}
  <Fa icon={faFileAudio} />
{/if}

{#if type.includes("video")}
  <Fa icon={faFileVideo} />
{/if}

{#if type.includes("word")}
  <Fa icon={faFileWord} />
{/if}

{#if type.includes("pdf")}
  <Fa icon={faFilePdf} />
{/if}

{#if type.includes("zip")}
  <Fa icon={faFileArchive} />
{/if}
<style>
  
div{
  font-size: large;
}
</style>

