import React from 'react';

import Navbar from '../components/portal/navbar'
import Profile from './profile'
import Footer from '../components/homepage/footer'

export default function Index() {
  return (
    <>
      <Navbar />
      <Profile />
      <Footer />
    </>
  );
}
