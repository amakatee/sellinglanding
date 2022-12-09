import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { getBannerData } from '../lib/fetchApi'

export async function getStaticProps() {
  const bannerData = await getBannerData()
  return {
    props: {bannerData}, // will be passed to the page component as props
  }
}
export default function Home({bannerData}) {
  
  console.log(bannerData)

  return (
    <div >
     ds{bannerData.firstText}

    </div>
  )
}
