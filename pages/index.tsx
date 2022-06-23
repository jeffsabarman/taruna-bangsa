import EducationForEmpowerment from '@/components/Hero/EducationForEmpowerment';
import HeroSection from '@/components/Hero/HeroSection';
import { Button, Typography } from '@mui/material';
import { NextPage } from 'next';
import React from 'react';
import 'typeface-ubuntu';

const Home: NextPage = () => {
  return (
    <>
      <HeroSection />
      <EducationForEmpowerment />
    </>
  );
};

export default Home;
