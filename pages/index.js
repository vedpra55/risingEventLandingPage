import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { isMobile } from "react-device-detect";


import Desktop from '../component/desktop'
import Mobile from "../component/mobile"
import WhyChooseUs from "../component/whyChooseUs"
import Video from "../component/video"
import ComingSoonCard from "../component/comingSoonCard"
import OurServices from '../component/ourServices';
import ContactUs from '../component/contact'

import { useEffect, useState } from 'react';

export default function Home() {
  const [isMount, setMount] = useState(false)

  useEffect(() => {
    setMount(true)
  }, [])

  return (
    <div>
      <Head>
        <title>Rising Event</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="apple-touch-icon" sizes="180x180" href="/icon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icon/favicon-16x16.png" />
        <link rel="manifest" href="/icon/site.webmanifest" />
      </Head>

      {isMobile ? <Mobile /> : <Desktop />}
      <ComingSoonCard />
      <OurServices />
      <ContactUs />
      <WhyChooseUs />
      <Video />

      
    </div>
  )
}
