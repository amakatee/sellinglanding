import axios from 'axios'
const BASE_URL='http://localhost:3000' || 'https://delicate-flan-c5f2d2.netlify.app'


const axiosBase = axios.create({
    baseURL:`${BASE_URL}/api`,
    credentials: "include"
  });
//navbar
//banner  
export const getBannerData = async () => {
    const res = await axiosBase.get(`/banner`)
    console.log(res.data[0])
    return res.data[0]
  
  }