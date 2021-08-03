<script>
 import { Meta, Story } from '@storybook/addon-svelte-csf';
 import Set from './Set.svelte'
 import sourceSet from '!!raw-loader!./Set.svelte'
 import Example from '../Example.svelte'

</script>

<Meta title="Bexis2/Core/Icon" 
 component={Set}
/>

<Story name="Set" >
 <Example title="Set Icon" source={sourceSet}>
  <Set/> 
  <span slot="info">
   This story shows how to set a Icon.
  </span>
 </Example>
 </Story>
 