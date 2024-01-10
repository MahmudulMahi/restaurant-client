import axios from "axios";

 const axiosSecure=axios.create({
  baseURL:'http://localhost:5000'
})
const useAxios = () => {
  axiosSecure.interceptors.request.use(function(config){
    const token=localStorage.getItem('access-token')
    console.log('request stoped interceptors',token)
    config.headers.authorization=`Bearer ${token}`
    return config
  },function (error) {
    // Do something with request error
    return Promise.reject(error);
  })

  axiosSecure.interceptors.response.use(function(response){
    return response;
  },(error)=>{
    const status=error.response.status
    console.log('kkkkk',status)
    return Promise.reject(error)
  })
 return axiosSecure
};

export default useAxios;