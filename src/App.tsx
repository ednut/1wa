import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import GlobalStyle from "./styles/global";
import Navbar from "./components/Navbar";
import Friends from "./components/Friends";
import Details from "./components/Details";
import * as themeConf from "./theme";
import styled, { ThemeProvider } from "styled-components";
import { useTheme } from "./ThemeManager";

const App: React.FC = () => {
  const theme = useTheme();

  const Wrapper = styled.div`
    background-color: ${themeConf.backgroundColor};
    color: ${themeConf.textColor};
  `;
  return (
    <BrowserRouter>
      <GlobalStyle />
      <ThemeProvider theme={{ mode: theme.mode }}>
        <Wrapper>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Friends}></Route>
            <Route exact path="/:id/details" component={Details}></Route>
          </Switch>
        </Wrapper>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
