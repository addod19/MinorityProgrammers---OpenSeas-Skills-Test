import React from 'react';

import '../assets/css/CollectibleFrames.css';

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
  </section>
);

export default CollectibleFrames;
