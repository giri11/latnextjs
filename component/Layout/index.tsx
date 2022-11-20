import Head from "next/head";
import { ReactNode } from "react";
import Footer from "../Footer";
import Header from "../Header";
import style from "./Layout.module.css"

interface LayoutProps{
    children: ReactNode;
    pageTitle: string
}

export default function Layout(props: LayoutProps) {
  const {children, pageTitle} = props;
  return (
    <>
         <Head>
          <title>
            Next JS Basic | {' '} {pageTitle}
          </title>
          <meta name='description' content='Website NextJS Basic' />
        </Head>
        <div className={style.container}>
            <Header/>
            <div className={style.content}>{children}</div>
            <Footer/>
        </div>
    </>
    
  )
}
