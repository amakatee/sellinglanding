import { useQuery } from '@tanstack/react-query';
import styles from '../styles/Home.module.css'
// import { getBannerData } from '../lib/fetchApi'
import axios from 'axios';
const baseURL ='http://localhost:3000/api'


export const getBannerData = async () => {
  const res = await axios.get(`${baseURL}/banner`)
  console.log(res.data[0])
  return res.data[0]

}
export async function getStaticProps() {
  const bannerData = await getBannerData()
  return {
    props: {bannerData}, // will be passed to the page component as props
   
  }
}
export default function Home(props) {
  

  const { data:bannerData } = useQuery({
    queryKey: ['bannerData'],
    queryFn: getBannerData,
    initialData: props.bannerData,
  })

  return (
    
    <div  >

     ds{bannerData.secondText }
     vds{bannerData.firstText }

    </div>
  )
}
