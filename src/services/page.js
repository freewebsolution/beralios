/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

const baseUrl = 'http://wp_react.test/wp-json/wp/v2/pages';

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}


export default {getAll}