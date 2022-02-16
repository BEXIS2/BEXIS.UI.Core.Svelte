import { writable } from 'svelte/store'

export let host = "";
export let username = "";
export let password = "";

const hostStore = writable(window.location.origin);
const usernameStore =  writable("");
const passwordStore = writable("");


export function setApiConfig(_host,_user,_pw)
{
 console.log("overwrite settings");
 hostStore.update(h=>h = _host);
 usernameStore.update(u=>u = _user);
 passwordStore.update(p=>p = _pw);
}


hostStore.subscribe(value => {
 host = value;
});

usernameStore.subscribe(value => {
 username = value;
});

usernameStore.subscribe(value => {
 password = value;
});