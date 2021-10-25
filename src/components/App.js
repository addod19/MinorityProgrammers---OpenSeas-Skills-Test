import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom'

import '../assets/css/App.css';
import Muddy_Waters from '../pages/Muddy_Waters';
import Music_Heroes from '../pages/Music_Heroes';
import Collectibles from '../pages/Collectibles';

import Header from './Header'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path='/:id'>
          <Collectibles />
        </Route>
        <Route exact path='/music_heroes'>
          <Music_Heroes />
        </Route>
        <Route exact path='/muddy_waters'>
          <Muddy_Waters />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
