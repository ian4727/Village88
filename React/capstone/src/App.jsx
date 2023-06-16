import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Landing from './pages/Landing';
import Main from './pages/Main';
import './index.css';

export default function App() {

    return (
            <Router>
                <Header/>
                    <Routes>
                        <Route exact path="/" element={<Landing />} />
                        <Route exact path="/main" element={<Main />} />
                    </Routes>
                <Footer/>
            </Router>
  );
}
