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
   <div slot="external" style="margin:1rem 0;" >
    <a href="https://fontawesome.com/v5.15/icons?d=gallery&p=2&s=solid&m=free" target="_blank">Free Solid Awesome Font Icons v5</a> <br/>
    <a href="https://www.npmjs.com/package/svelte-fa" target="blank" >more informations</a>
   </div>    
 </Example>
 </Story>
 