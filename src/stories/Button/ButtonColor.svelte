<script>

  import { Button } from 'sveltestrap';

  const colors= ['primary','secondary','success','danger','warning','info','light','dark'];

  const classes= ['b2_button_function','b2_button_action'];

</script>

<h3>BEXIS2 </h3>

{#each classes as c}
  <Button class="{c}">{c}</Button><br/>
{/each}

<h3>Sveltestrap</h3>

{#each colors as c}
  <Button color="{c}">{c}</Button> <br/>
{/each}

