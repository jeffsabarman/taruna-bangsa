import HeroSection from '@/components/Home/HeroSection';
import WhyTb from '@/components/Home/WhyTb';
import { NextPage } from 'next';
import React from 'react';
import 'typeface-ubuntu';

const Home: NextPage = () => {
  return (
    <>
      <HeroSection />
      <WhyTb />
    </>
  );
};

export default Home;
