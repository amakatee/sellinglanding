import axios from 'axios'




const axiosBase = axios.create({
    baseURL:`https://delicate-flan-c5f2d2.netlify.app/api`,
    credentials: "include"
  });

//navbar
//banner  
export const getBannerData = async () => {
    const res = await axiosBase.get(`/banner`)
    console.log(res.data[0])
    return res.data[0]
  
  }