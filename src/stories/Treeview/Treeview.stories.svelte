<!-- TreeView.stories.svelte -->

<script>
 import { Meta, Template, Story } from '@storybook/addon-svelte-csf';

 import Treeview from '../../components/Treeview/Treeview.svelte';
 import Data from './Data.svelte';
 import sourceData from '!!raw-loader!./Data.svelte';
 import Options from './Options.svelte';
 import sourceOption from '!!raw-loader!./Options.svelte';
 import Example from '../Example.svelte'

</script>


<Meta title="Bexis2/Treeview" 
component={Treeview} source="false"
/>

<Template let:args>
 <Treeview {...args}/>
</Template>

<Story name="Data"  >
 <Example title="Data" source={sourceData}>
  <Data/> 
  <p slot="info">
   This story shows all the colors of the different buttons.
  </p>
 </Example>
 </Story>

 <Story name="Option"  >
  <Example title="Option" source={sourceOption}>
   <Options/> 
   <span slot="info">
    This story shows all the colors of the different buttons.
   </span>
  </Example>
  </Story>
 



