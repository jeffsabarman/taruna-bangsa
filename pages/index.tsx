import Academics from '@/components/Home/Academics';
import ContactUs from '@/components/Home/ContactUs';
import Facilities from '@/components/Home/Facilities';
import HeroSection from '@/components/Home/HeroSection';
import NewsAndEvents from '@/components/Home/NewsAndEvents';
import SocialMedia from '@/components/Home/SocialMedia';
import WhyTb from '@/components/Home/WhyTb';
import YoutubeChanel from '@/components/Home/YoutubeChanel';
import { NextPage } from 'next';
import React from 'react';
import 'typeface-ubuntu';

const Home: NextPage = () => {
  return (
    <>
      <HeroSection />
      <WhyTb />
      <Academics />
      <Facilities />
      {/* <NewsAndEvents /> */}
      <SocialMedia />
      <YoutubeChanel />
      <ContactUs />
    </>
  );
};

export default Home;
