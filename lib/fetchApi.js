import axios from 'axios'
const BASE_URL='http://localhost:3000/api'


const axiosBase = axios.create({
    baseURL:'http://localhost:3000/api',
    credentials: "include"
  });
//navbar
//banner  
export const getBannerData = async () => {
    const res = await axiosBase.get(`/banner`)
    console.log(res.data[0])
    return res.data[0]
  
  }