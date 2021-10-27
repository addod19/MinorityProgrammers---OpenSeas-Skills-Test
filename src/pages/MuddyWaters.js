import React from 'react';

import Hero from '../components/Hero';
import Banner from '../components/Banner';

import '../assets/css/MuddyWaters.css';
import MusicHeroesCollections from '../components/MusicHeroesCollections';
import FromMusicHeroesCollections from '../components/FromMusicHeroesCollections';

const MuddyWaters = () => (
  <>
    <Hero className="muddy-waters">
      <Banner title="Muddy Waters" subtitle="Verified NFT market placefor music artists." />
    </Hero>
    <div className="muddy-waters-list">
      <MusicHeroesCollections />
    </div>
    <div className="from-music-heroes">
      <FromMusicHeroesCollections />
    </div>
  </>
);

export default MuddyWaters;
