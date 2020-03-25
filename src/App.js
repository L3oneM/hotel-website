import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';

import Navbar from './components/NavBar/Navbar';
import HomePage from './pages/HomePage/HomePage';
import Footer from './components/Footer/Footer';

import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <>
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <Switch>
        <Route exact path='/' component={HomePage} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
