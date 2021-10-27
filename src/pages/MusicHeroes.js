import React from 'react';

import Hero from '../components/Hero';
import Banner from '../components/Banner';

import '../assets/css/MusicHeroes.css';
// import MusicHeroesCollections from '../components/MusicHeroesCollections';

const MusicHeroes = () => (
  <section className="music-heroes-section">
    <Hero className="music-heroes">
      <Banner title="Music Heroes" subtitle="Verified NFT market placefor music artists." />
    </Hero>
    {/* <MusicHeroesCollections /> */}
  </section>
);

export default MusicHeroes;
