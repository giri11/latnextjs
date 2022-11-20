import styles from '../styles/Home.module.css'
import Layout from '../component/Layout'
import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <>
    {/* <Head>
      <title>Home Page My Next JS</title>
      <meta name='description' content='Website NextJS Basic' />
    </Head> */}
      <Layout pageTitle='Home Page giri'>
      {/* ini yang benar */}
        <Image src="/sheva.jpg" width={200} height={200} alt="profile"  /> 

        {/* dibawah ini yg salah */}
        <img src='/sheva.jpg' style={{width: 200, height: 200}} alt="profile" />
        <h1 className={styles['title-homepage']}>Welcome Prawito</h1>
        <p>lorem ipsum</p>
      </Layout>
    </>
  )
}
