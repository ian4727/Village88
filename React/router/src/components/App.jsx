import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import AboutMe from './AboutMe';
import Gallery from './Gallery';
import Navigation from './Navbar';
import '../assets/stylesheets/App.css';

function App() {
  return (
    <Router>
      <div className="MyWebsite">
        <Navigation />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/aboutMe" element={<AboutMe />} />
          <Route exact path="/gallery" element={<Gallery />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
