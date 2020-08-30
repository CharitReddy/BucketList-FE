import axios from 'axios';
import END_POINTS from './endpoints';

export default axios.create({
  baseURL: END_POINTS.baseURL,
});
