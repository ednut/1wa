import styled from 'styled-components';

export const NavContainer = styled.div`
  width: 100%;
  height: 80px;
  background-color: #ffffff;
  box-shadow: inset 0px -1px 0px #e2e2ea;
  padding: 0 20px;
  .wrapper {
    width: 90%;
    height: 100%;
    margin: auto;
    display: flex;
    @media (max-width: 991px) {
      width: 90%;
    }
  }
`;

export const Logo = styled.div`
  width: 20%;
  img {
    width: 112px;
    margin-top: 24px;
  }
`;

export const Search = styled.div`
  width: 60%;
  .input-wrapper {
    background-color: #fafafb;
    width: 50%;
    height: 37px;
    border: 1px solid #f1f1f5;
    box-sizing: border-box;
    border-radius: 15px;
    display: flex;
    padding: 1px;
    margin-top: 21px;
    position: relative;
    label {
      position: absolute;
      top: -10000px;
    }
    input {
      width: 90%;
      border: none;
      background: transparent;
      height: 100%;
      outline: none;
      padding: 0 10px;
    }
    button {
      width: 10%;
      border: none;
      background-color: transparent;
      cursor: pointer;
    }
  }
`;

export const NotificationSection = styled.div`
  width: 20%;
  line-height: 80px;
  ul {
    margin: 0;
    padding: 0;
    text-align: right;
    li {
      display: inline-block;
      margin-right: 20px;
      img {
        width: 22px;
        height: auto;
        margin-top: 25px;
      }
      &:last-child {
        margin-right: 0;
        height: 65px;
        vertical-align: bottom;
      }
      div {
        display: flex;
        margin-left: 10px;
        span {
          display: inline-block;
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background-repeat: no-repeat;
          background-position: center;
          background-size: cover;
          background-image: url('https://i.ibb.co/vvZ4C4X/5.png');
        }
        img {
          width: auto;
          height: 7px;
          margin-top: 15px;
          margin-left: 4px;
        }
      }
    }
  }
`;
