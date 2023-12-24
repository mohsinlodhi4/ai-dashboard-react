import axios from "axios"
import { logout } from "./functions";

const requestPromise = (type, url, data, json = true) => {
    if(!['get', 'put', 'post', 'delete', 'patch'].includes(type)) {
        throw new Error("Invalid Http verb for "+ url);
    }
    return new Promise((resolve, reject) =>{
        let user = null
        try {
            user = JSON.parse(localStorage.getItem('user'));
        }catch(e){
            user = null
        }
        const token = user?.token

        const headers = {
            "Authorization": `Bearer ${token}`,
            'Accept':'application/json',
        }
        if (json) {
            headers['Content-Type'] = 'application/json';
        }
        const config = {
            method: type,
            url,
            headers,
        }
        if(type == 'get') {
            config['params'] = data
        }else {
            config['data'] = data;
        }

        axios(config)
        .then(function (response) {
            resolve(response)
        })
        .catch(error=>{
            console.log("main error: ", error)
            if (error.response && error.response.status == 401) {
                logout();
                return;
            } 
            reject(error.response)
        } );
    });
}

export const getRequest = (url, data= {}, json = true) =>{
    return requestPromise('get', url, data, json);
}
export const postRequest = (url, data, json = true) =>{
    return requestPromise('post', url, data, json);
}
export const putRequest = (url, data= {}, json = true) =>{
    return requestPromise('put', url, data, json);
}
export const deleteRequest = (url, data= {}, json = true) =>{
    return requestPromise('delete', url, data, json);
}
