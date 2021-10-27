import React from 'react';

import '../assets/css/MusicHeroesCollection.css';
import img1 from '../assets/images/img1.png';

const MusicHeroesCollections = () => (
  <section className="wrap">
    <div className="col-1">
      <h4 className="mh-col">MusicHeroes Collection</h4>
      <h2 className="mw">Muddy Waters</h2>
      <img className="img" src={img1} alt="desc" />
      <ul className="tags">
        <li className="hip-hop-tags">
          <a href="/hip-hop" className="text-deco-none">HipHop</a>
        </li>
        <li className="atlanta-tags">
          <a href="/atlanta" className="text-deco-none">Atlanta</a>
        </li>
        <li className="rapper-tags">
          <a href="/rapper" className="text-deco-none">Rapper</a>
        </li>
        <li className="trapper-tags">
          <a href="/trapper" className="text-deco-none">Trapper</a>
        </li>
        <li className="slime-tags">
          <a href="/slime" className="text-deco-none">Slime</a>
        </li>
      </ul>
      <span className="edition">
        Edition:
        <span className="num">
          1 of 117
        </span>
      </span>
    </div>
    <div className="col-2">
      <div className="bid-row">
        <div className="amount">
          <div className="current-bid">
            Current Bid
            <br />
            <span className="c-bid-money">
              $1,017.17
            </span>
          </div>
          <div className="starting-bid">
            Starting Bid
            <br />
            <span className="s-bid-money">
              $1.07
            </span>
          </div>
        </div>
        <div className="time">
          Bid Ends in
          <br />
          <span className="time-date">
            12 d 3h 3m 2s
          </span>
        </div>
      </div>
      <div className="place-bid">
        <input type="text" placeholder="$1,003.45" className="bid-input" />
        <button type="submit" className="bid-btn">Place Bid</button>
      </div>
      <div className="bid-description">
        <div className="desc-row">
          <h3 className="description">Description</h3>
          <span className="desc-text">
            This chain represents young thugs&apos;s solidarity with his friends growing up
          </span>
        </div>
        <div className="details-row">
          <h3>Details</h3>
          <div className="flex">
            <div className="details-props">
              <span className="c-address">Contract Address</span>
              <span className="t-id">TokenID</span>
              <span className="b-chain">Blockchain</span>
            </div>
            <div className="details-props">
              <span className="c-address-val">0x.1123</span>
              <span className="t-id-val">1</span>
              <span className="b-chain-val">Ethereum</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default MusicHeroesCollections;
