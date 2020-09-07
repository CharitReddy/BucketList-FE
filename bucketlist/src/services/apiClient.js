import axios from 'axios';
import END_POINTS from './endpoints';
import getUserToken from '../helpers/getUserToken';

const token = getUserToken();

export default axios.create({
  baseURL: END_POINTS.baseURL,
  headers: { Authorization: `Bearer ${token}` },
});
