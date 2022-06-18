import React from 'react';
import Features from './components/Features';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Quality from './components/Quality';

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="px-40">
        <Hero />
      </div>
      <Features />
      <Quality />
    </>
  );
};

export default Home;
