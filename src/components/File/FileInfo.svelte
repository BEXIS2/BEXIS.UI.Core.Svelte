<script>

import FileIcon from './FileIcon.svelte';

export let name;
export let type = "";
export let description;

</script>

<FileIcon {type} /> {name}