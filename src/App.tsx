import React from 'react';
import GlobalStyle from './styles/global';
import Navbar from './components/Navbar';
import Cards from './components/Cards';
import Filter from './components/Filter';

const App: React.FC = () => (
  <>
    <GlobalStyle />
    <Navbar />
    <Filter />
    <Cards />
  </>
);

export default App;
