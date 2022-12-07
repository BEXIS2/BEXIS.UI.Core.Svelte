// Reexport your entry components here
import FileIcon from './components/File/FileIcon.svelte'
import FileInfo from './components/File/FileInfo.svelte'
// import FileUploader from './components/File/FileUploader.svelte'

export {
 FileInfo,
 FileIcon
 
}


export {Api} from './services/Api.js'
export {host,username,password,setApiConfig} from './stores/apistore.js'


