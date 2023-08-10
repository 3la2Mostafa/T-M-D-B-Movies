import axios from "axios";
import store from '../redux/store/store'
import { changeLoader } from "../redux/actions/action";
const axiosInstance = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        'api_key': '22901c628be5841a3aed7a3b3bfa9b02'
    }
})




// Add a request interceptor
axiosInstance.interceptors.request.use((request) => {
    store.dispatch(changeLoader(true))
     
      console.log('Request Interceptor:', request);
      return request;
    },
    (error) => {
      console.log('Request Error Interceptor:', error);
      return Promise.reject(error);
    }
  );


axiosInstance.interceptors.response.use((response) => {
      store.dispatch(changeLoader(false))

      console.log('Response Interceptor:', response);
      return response;
    },
    (error) => {
      
      console.log('Response Error Interceptor:', error);
      return Promise.reject(error);
    }
  );


export default axiosInstance;