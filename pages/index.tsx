import React from 'react'
import Academics from '@/components/Home/Academics'
import ContactUs from '@/components/Home/ContactUs'
import Facilities from '@/components/Home/Facilities'
import HeroSection from '@/components/Home/HeroSection'
import SocialMedia from '@/components/Home/SocialMedia'
import WhyTb from '@/components/Home/WhyTb'
import YoutubeChanel from '@/components/Home/YoutubeChanel'
import NewsAndEvents from '@/components/Home/NewsAndEvents'
import 'typeface-ubuntu'

const Home = () => {
  return (
    <>
      <HeroSection />
      <WhyTb />
      <Academics />
      <Facilities />
      <NewsAndEvents />
      <SocialMedia />
      <YoutubeChanel />
      <ContactUs />
    </>
  )
}

export default Home
