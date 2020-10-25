import React from 'react';
import {Hero, About} from '../components/HomeContent';

const Home = () => {
  return (
    <div style={{backgroundColor: '#444444'}}>
      <Hero/>
      <About/>
    </div>
  );
}

export default Home;