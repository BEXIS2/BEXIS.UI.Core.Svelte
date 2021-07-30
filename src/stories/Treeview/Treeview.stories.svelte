<!-- TreeView.stories.svelte -->

<script>
 import { Meta, Template, Story } from '@storybook/addon-svelte-csf';

 import Treeview from '../../components/Treeview/Treeview.svelte';
 import data from './data.json'

 let target ="_blank";

 // let args = {
 // href:"api/test/id=",
 // checkboxhref:"api/test/id=",
 // showcheckbox:false,
 // showcount:false,
 // target, 
 // data}

</script>


<Meta title="Bexis2/Core/Treeview" 
component={Treeview} 
argTypes={{
 href: { control: "text" },
 checkboxhref: { control: "text" },
 showcheckbox: { control: "boolean" },
 showcount: { control: "boolean" },
 target: { control: "text" },
 data: data
}}
/>

<Template let:args>
 <Treeview {...args}/>
</Template>

<Story name="TreeView Default"  />

<Story name="TreeView Empty data" args={{data:null}} />


