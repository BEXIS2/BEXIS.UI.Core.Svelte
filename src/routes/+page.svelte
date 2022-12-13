<script lang="ts">
import {onMount} from 'svelte'
import {ListView} from "@bexis2/svelte-bexis2-core-ui"


import {host, setApiConfig, FileIcon} from '@bexis2/svelte-bexis2-core-ui'
import FileInfo from '$lib/components/File/FileInfo.svelte';
import type {user} from "$lib/models/Models.js";

$:h="no host";

onMount(async () => {

 
 console.log(window.location.origin);
 setApiConfig(window.location.origin,"david","123")
 h = host

let u:user = {name:"david" }

console.log(u);

});

let u:user;

</script>

<ListView></ListView>

