import React from 'react';
import TypeWriter from './TypeWriter';
import photo from '../assets/images/photo.gif';

function Gallery() {
  return (
    <div>
      <h1 className="hiyah"><TypeWriter text="Hiyah!"/></h1>
      <img className="photo" src={photo} alt="" />
    </div>
  );
}

export default Gallery;