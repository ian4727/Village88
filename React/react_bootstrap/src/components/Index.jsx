import React from 'react';
import ReactDOM from 'react-dom/client';
import NavBar from './Nav';
import CarouselFade from './Carousel';
import Signup from './Signup';
//import { Button } from 'react-bootstrap';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <NavBar></NavBar>
      <CarouselFade></CarouselFade>
      <Signup />
  </React.StrictMode>
);