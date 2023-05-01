import axios from 'axios';
import { PROXY_URL } from 'helpers/constants';

const instance = axios.create({
  baseURL: `${PROXY_URL}http://api.wisey.app/api/v1/`,
});

export default instance;
