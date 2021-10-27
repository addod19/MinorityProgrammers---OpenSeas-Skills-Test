import React from 'react';

import '../assets/css/FromMusicHeroesCollections.css';
import Collection from './Collection';

import defaul from '../assets/images/default.png';
import muddy from '../assets/images/muddy.png';

const FromMusicHeroesCollections = () => (
  <section className="main-wrap">
    <h1 className="main-header">From Music Heroes Collection</h1>
    <hr className="divider" />
    <div className="collection-layout">
      <Collection image={defaul} header="Music Heroes" floorPrice={500} volPrice={24000000} />
      <Collection image={muddy} header="Music Heroes" floorPrice={500} volPrice={24000000} />
      <Collection image={defaul} header="Music Heroes" floorPrice={500} volPrice={24000000} />
      <Collection image={muddy} header="Music Heroes" floorPrice={500} volPrice={24000000} />
      <Collection image={defaul} header="Music Heroes" floorPrice={500} volPrice={24000000} />
      <Collection image={defaul} header="Music Heroes" floorPrice={500} volPrice={24000000} />
    </div>
  </section>
);

export default FromMusicHeroesCollections;
