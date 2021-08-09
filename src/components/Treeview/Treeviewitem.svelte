<script> 

  import { createEventDispatcher } from 'svelte';
  

  import { fade } from 'svelte/transition';
  import { selected } from "./stores.js";

  import Fa from 'svelte-fa/src/fa.svelte'
  import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
  import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

  export let showcheckbox;
  export let showcount;

  // set local varaibles reading from the item
  // you can e.g. use href instead of item.href
  export let item;
  const { label, items, description, count } = item;

  $:active = item.active; 
  export let expand = false;
 
  // create event dispatcher
  const dispatch = createEventDispatcher();

  function clickHandler()
  {
      if(item.label != selected.label)selected.update(n=>n = item);
      active = !active;

      dispatch('selectItem', item.value);
  }

  function clickCheckboxHandler()
  {
      active = !active;
      selected.update(n=>n = item);
      dispatch('selectcheckbox', item.value);
  }

  const unsubscribe = selected.subscribe(value => {active = false;});

</script>

<!-- Item  -->
<div title={description} >

  <!-- Expand Icon -->

  {#if items.length > 0 }  
    <span on:click="{()=> expand = !expand }"> 
    {#if expand} <Fa icon={faAngleDown} />
    {:else} <Fa icon={faAngleRight} />
    {/if}
    </span>
  {/if}


  {#if showcheckbox} <input type=checkbox bind:checked={active} on:click="{clickCheckboxHandler}">{/if}

   <a class:active on:click="{clickHandler}"> {label} </a>

  {#if showcount}({count}) {/if}

</div>


<!-- Children section-->

{#if expand}
<div transition:fade >
  <ul>
  {#each items as item}
    <li><svelte:self {item} {showcount} {showcheckbox}  on:selectItem /></li>
  {/each}
  </ul>
</div>
{/if}


<!-- Sytle -->

<style>
  a{
    color: inherit;
    text-decoration: none;
  }

  a.active{
    font-weight: bold;
  }


  a:hover
  {
    font-weight: bold;
  }

</style>