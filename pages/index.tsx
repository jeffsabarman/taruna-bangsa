import Academics from '@/components/Home/Academics';
import Facilities from '@/components/Home/Facilities';
import HeroSection from '@/components/Home/HeroSection';
import NewsAndEvents from '@/components/Home/NewsAndEvents';
import WhyTb from '@/components/Home/WhyTb';
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
      <NewsAndEvents />
    </>
  );
};

export default Home;
