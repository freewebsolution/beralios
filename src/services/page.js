/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

const baseUrl = 'http://reactwp.test/wp-json/wp/v2/pages';

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}


const getId = (id) => {
    const request = axios.get(`${baseUrl}/${id}`)
    return request.then(response => response.data)
 }
 
 
 export default { getAll,getId}