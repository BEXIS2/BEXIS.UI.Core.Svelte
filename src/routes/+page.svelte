<script>
import {onMount} from 'svelte'
import {host, setApiConfig, FileIcon} from '@bexis2/bexis2-lib-test'

$:h="no host";

onMount(async () => {

 console.log(window.location.origin);
 setApiConfig(window.location.origin,"david","123")
 h = host

});

</script>

<h1>Welcome to your library project</h1>
<FileIcon type="audio" />
<h1>{h}</h1>


<p>Create your package using @sveltejs/package and preview/showcase your work with SvelteKit</p>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
