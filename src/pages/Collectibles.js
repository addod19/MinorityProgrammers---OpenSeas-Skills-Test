import React from 'react';
import Hero from '../components/Hero';

import Banner from '../components/Banner';
import TopCollections from '../components/TopCollections';
import '../assets/css/Collectibles.css';
import CollectibleFrames from '../components/CollectibleFrames';

const Collectibles = () => (
  <section className="collectibles">
    <Hero className="hero">
      <Banner title="Collectibles" subtitle="Verified NFT market placefor music artists." />
    </Hero>
    <TopCollections />
    <CollectibleFrames />
  </section>
);

export default Collectibles;
