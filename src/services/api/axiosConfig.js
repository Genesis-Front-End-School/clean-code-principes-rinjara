import axios from 'axios';
import { proxyURL } from '../../helpers/constants';

const instance = axios.create({
  baseURL: `${proxyURL}http://api.wisey.app/api/v1/`,
});

export default instance;
