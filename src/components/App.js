import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import '../assets/css/App.css';
import MuddyWaters from '../pages/MuddyWaters';
import MusicHeroes from '../pages/MusicHeroes';
import Collectibles from '../pages/Collectibles';

import Header from './Header';

const App = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path="/:id">
        <Collectibles />
      </Route>
      <Route exact path="/music_heroes">
        <MusicHeroes />
      </Route>
      <Route exact path="/muddy_waters">
        <MuddyWaters />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default App;
