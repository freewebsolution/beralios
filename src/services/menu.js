/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';

const baseUrl = 'http://reactwp.test/wp-json/menus/v1/menus';

const getAll = async () => {
  const response = await axios.get(`${baseUrl}`);
  return response.data;
};


const getId = (id) => {
  const request = axios.get(`${baseUrl}/${id}`)
  return request.then(response => response.data)
}


const getByName = async (slug) => {
  const response = await axios.get(`${baseUrl}/${slug}`);
  return response.data;
}

export default { getAll, getId, getByName };
