import React from 'react';
import Hero from '../components/Hero';

import Banner from '../components/Banner';
import TopCollections from '../components/TopCollections';
import '../assets/css/Collectibles.css';

const Collectibles = () => (
  <section className="collectibles">
    <Hero>
      <Banner title="Collectibles" subtitle="Verified NFT market placefor music artists." />
    </Hero>
    <TopCollections />
  </section>
);

export default Collectibles;
