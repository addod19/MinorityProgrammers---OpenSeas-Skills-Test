import React from 'react';

import '../assets/css/CollectibleFrames.css';
import Collectible from './Collectible';

import bg from '../assets/images/tyga.png';
import bg1 from '../assets/images/muddy.png';
import bg2 from '../assets/images/chance.png';

const CollectibleFrames = () => (
  <section className="collectible-frames">
    <div className="filter-row">
      <h3>Collectibles</h3>
      <div className="filter">
        <select name="collectibles" id="collectibles" className="text-color">
          <input type="text" />
          <option value="Alphabetical">Alphabetical</option>
          <option value="Popularity">Popularity</option>
          <option value="Category">Category</option>
          <option value="Recently Added">Recently Added</option>
          <option value="Most Active">Most Active</option>
        </select>
      </div>
    </div>
    <hr className="divider" />
    <div className="row2">
      <ul className="list">
        <li className="upcoming">Upcoming</li>
        <li className="marketplace">Marketplace</li>
        <li className="sounds">Sounds</li>
        <li className="generative">Generative</li>
      </ul>
    </div>
    <div className="row3">
      <Collectible background={bg} title="NFTyga" author="Tyga" />
      <Collectible background={bg1} title="Slim Chain" author="Young Thug" />
      <Collectible background={bg2} title="Chances SG" author="Chance the yound" />
    </div>
  </section>
);

export default CollectibleFrames;
