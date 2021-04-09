import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import GlobalStyle from './styles/global';
import Navbar from './components/Navbar';
import Friends from './components/Friends';
import Details from './components/Details';

const App: React.FC = () => (
  <BrowserRouter>
    <GlobalStyle />
    <Navbar />
    <Switch>
      <Route exact path="/" component={Friends}></Route>
      <Route exact path="/:id/details" component={Details}></Route>
    </Switch>
  </BrowserRouter>
);

export default App;
