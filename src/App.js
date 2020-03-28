import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';

import Navbar from './components/NavBar/Navbar';
import HomePage from './pages/HomePage/HomePage';
import Footer from './components/Footer/Footer';
import RoomsPage from './pages/RoomsPage/RoomsPage';
import RoomPage from './pages/RoomPage/RoomPage';
import ContactPage from './pages/ContanctPage/ContanctPage';
import LoginAndSignUpPage from './pages/LoginAndSignUpPage/LoginAndSignUpPage';

import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <>
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <Switch>
        <Route
          exact
          path='/'
          render={() => <HomePage setCurrentPage={setCurrentPage} />}
        />
        <Route exact path='/rooms' component={RoomsPage} />
        <Route exact path='/rooms/:id' component={RoomPage} />
        <Route exact path='/contact' component={ContactPage} />
        <Route path='/login' component={LoginAndSignUpPage} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
