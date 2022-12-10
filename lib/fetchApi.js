import axios from 'axios'
const BASE_URL='https://delicate-flan-c5f2d2.netlify.app'


const axiosBase = axios.create({
    baseURL:`${process.env.BASE_URL}/api`,
    credentials: "include"
  });
//navbar
//banner  
export const getBannerData = async () => {
    const res = await axiosBase.get(`/banner`)
    console.log(res.data[0])
    return res.data[0]
  
  }