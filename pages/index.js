import Head from 'next/head'
import { isMobile } from "react-device-detect";


import Desktop from '../component/desktop'
import Mobile from "../component/mobile"
import WhyChooseUs from "../component/whyChooseUs"
import Video from "../component/video"
import ComingSoonCard from "../component/comingSoonCard"
import OurServices from '../component/ourServices';
import ContactUs from '../component/contact'


export default function Home() {

  return (
    <div>
      <Head>
        <title>Rising Event - Make Your Event Memorable</title>

        <meta name="description" content="Welcome to Rising event our mission is to make your event memorable. Weeding, birthday, cinematic videography , decoration, make-up and more" />
        <meta name="keywords" content="weeding, event manegment, in Arrah, cinematic videography , birthday, decoration, affordable price" />
        <meta name="author" content="Rising Event" />
        <meta name="robots" content="index, follow" />

        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="risingevent" />
        <meta property="og:url" content="https://www.risingevent.com/" />
        <meta property="og:description" content="Welcome to Rising event our mission is to make your event memorable. Weeding, birthday, cinematic videography , decoration, make-up and more" />
        <meta property="og:title" content="Rising Event - Make Your Event Memorable" />

        <meta name="viewport" content="width=device-width,initial-scale=1.0"></meta>

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
