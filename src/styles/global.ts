import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 16px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    line-height: 2;
    font-family: 'Poppins', sans-serif;
    background-color: #fafafb;
  }
  .container{
    width: 70%;
    height: 100%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 50px;
    @media (max-width: 991px) {
      width: 90%;
    }
  }
  a, button{
    text-decoration: none;
    outline: none;
  }
`;
