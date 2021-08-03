<script>
 import Treeview from '../../components/Treeview/Treeview.svelte'
 import data from './data.json'

 let target ="_blank";

 let args = {
 href:"api/test/id=",
 checkboxhref:"api/test/id=",
 showcheckbox:true,
 showcount:true,
 target:"_blank", 
 data}
 
</script>

<Treeview {...args} />


