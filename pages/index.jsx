import React from 'react';

import Info from '../components/homepage/info'
import Navbar from '../components/homepage/navbar'
import Solutions from '../components/homepage/solutions'
import Benefits from '../components/homepage/benefits'
import Footer from '../components/homepage/footer'

export default function Index() {
  return (
    <>
      <Navbar />
      <Info />
      <Solutions />
      <Benefits />
      <Footer />
    </>
  );
}
