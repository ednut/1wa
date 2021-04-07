import React from 'react';
import GlobalStyle from './styles/global';
import Navbar from './components/Navbar';
import Cards from './components/Cards';

const App: React.FC = () => (
  <>
    <GlobalStyle />
    <Navbar />
    <Cards />
  </>
);

export default App;
