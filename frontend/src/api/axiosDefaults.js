import axios from "axios";

axios.defaults.baseURL = 'https://bb-pp5-movie-review-app-363d95a342e4.herokuapp.com/';
//axios.defaults.baseURL = 'https://bb-pp5-api-c8624a6ee9af.herokuapp.com/';
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';
axios.defaults.withCredentials = true;

export const axiosReq = axios.create();
export const axiosRes = axios.create();