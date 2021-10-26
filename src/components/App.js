import React from 'react';
import { Switch, Route } from 'react-router-dom';

import '../assets/css/App.css';
import MuddyWaters from '../pages/MuddyWaters';
import MusicHeroes from '../pages/MusicHeroes';
import Collectibles from '../pages/Collectibles';
import Error from './Error';

import Header from './Header';

const App = () => (
  <>
    <Header />
    <Switch>
      <Route exact path="/" component={Collectibles} />
      <Route path="/music_heroes" component={MusicHeroes} />
      <Route path="/muddy_waters" component={MuddyWaters} />
      <Route component={Error} />
    </Switch>
  </>
);

export default App;
