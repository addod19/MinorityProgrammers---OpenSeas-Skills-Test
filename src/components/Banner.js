import React from 'react';

import '../assets/css/Banner.css';

const Banner = ( { title, subtitle} ) => {
  return(
    <div className="banner">
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
  )
}

export default Banner;