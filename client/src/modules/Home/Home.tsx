import React from 'react';
import Features from './components/Features';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Quality from './components/Quality';

const Home = () => {
  return (
    <>
      <div className="px-40">
        <Navbar />
        <Hero />
        <Features />
      </div>
      <Quality />
    </>
  );
};

export default Home;
