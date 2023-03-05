import axios from 'axios';

const baseUrl = 'http://wp_react.test/wp-json/wp-api-menus/v2';

const getAll = async () => {
  const response = await axios.get(`${baseUrl}/menus`);
  return response.data;
};


export default { getAll};
