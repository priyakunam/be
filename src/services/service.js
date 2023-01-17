

import axios from 'axios'
    let base_url = 'http://localhost:3000/todo';
    export let getProfiles = () => {
         return axios.get(base_url);
    }
    
    let welcome_url ="http://localhost:3000/message/message";

    export let getMessage =() =>{
     return axios.get(welcome_url);
    }