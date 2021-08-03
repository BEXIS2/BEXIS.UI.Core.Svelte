<script>
  import Item from "./Treeviewitem.svelte";

  export let data;
  export let href;
  export let checkboxhref;
  export let showcheckbox;
  export let showcount;
  export let target;

  console.log(data);

</script>

<div>

{#if data}
  <ul>
    {#each data as item}
      <li><Item {item} {href} {checkboxhref} {showcount} {showcheckbox} {target}  /></li>
    {/each}
  </ul>
{:else}
<p>no tree data</p>
{/if}

</div>

<style>

:global(li){ margin-left:17px;margin-top:2px;float:left; float:none; cursor:pointer}

:global(ul) {
  list-style-type:none;
  background:0;
  margin:0px;
  padding:0; 
  list-style-position:inside}

:global(div){border-width:0;background:0;white-space:nowrap;overflow:auto;}


</style>