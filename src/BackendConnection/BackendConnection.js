import axios from 'axios';


export function getBackendConnection(){
    return'http://localhost:5000';
}

export async function fetchData(url,callback,params = {}) {
    axios.get(url,params)
        .then(response => {
            const data = response.data; // Assuming the response is JSON
            callback(data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

export async function postData(url,callback,params = {}) {
    axios.post(url,params).then(response => {
        const data = response.data;
        callback(data);
    }).catch(error => {
        console.error('Error Posting data:', error);
    });
}