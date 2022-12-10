import axios from 'axios'




const axiosBase = axios.create({
    baseURL:`${process.env.BASE_URL}/api`,
    credentials: "include"
  });
  console.log(process.env.BASE_URL)
//navbar
//banner  
export const getBannerData = async () => {
    const res = await axiosBase.get(`/banner`)
    console.log(res.data[0])
    return res.data[0]
  
  }