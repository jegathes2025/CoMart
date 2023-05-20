import axios from "axios";

/**
 * create axios instance
 * add globally baseurl in axios
 * same instance hereafter we can use in ourproject refer SearchPage
 */
const AxiosInstance = axios.create({ baseURL: "https://dummyjson.com/" });

export default AxiosInstance;
