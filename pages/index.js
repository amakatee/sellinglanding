import { useQuery } from '@tanstack/react-query';
import styles from '../styles/Home.module.css'
import { getBannerData } from '../lib/fetchApi'


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

     ds{ bannerData ? bannerData.secondText : null}

    </div>
  )
}
