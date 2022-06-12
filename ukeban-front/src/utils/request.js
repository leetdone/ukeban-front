import axios from "axios";
switch(process.env.REACT_APP_mode){
    case "development":
      axios.defaults.baseURL = 'http://127.0.0.1:3005';
      break;
    case 'test':
      axios.defaults.baseURL = 'http://127.0.0.1:3006';
      break;
    case 'production':
      axios.defaults.baseURL = 'http://127.0.0.1:3007';
      break;
    default:
      axios.defaults.baseURL = 'http://127.0.0.1:305';
      console.log(process.env.REACT_APP_mode);
}

const requestInstance = axios.create({
    timeout: 1000
})



/**
 * 
 * @param {*} url request address
 * @param {*} config parameter in url
 * @returns 
 */
export function get(url, config){
    return requestInstance.get(url, 
        config
    )
}

    // axios.defaults.baseURL = 'http://127.0.0.1:3005'

    // axios.interceptors.request.use(function(config){
    //   // this.setState((prevState) => ({
    //   //   isLoading: true
    //   // }))
    //   console.log('aaaaa')
    //   return config
    // }, function(error){
    //   console.log(error)
    //   return Promise.reject(error)
    // })

    // axios.interceptors.response.use(function(response){
    //   // this.setState((prevState) => ({
    //   //   isLoading: false
    //   // }))
    //   // response.isLoading = 
    //   return response
    // }, function(error){
    //   console.log(error)
    //   return Promise.reject(error)
    // })