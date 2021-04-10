import styled from "styled-components";
import * as themeConf from "../../theme";

export const NavContainer = styled.div`
  width: 100%;
  height: 80px;
  background-color: ${themeConf.backgroundColor};
  box-shadow: ${themeConf.boxShadow};
  padding: 0 20px;
  .wrapper {
    width: 90%;
    height: 100%;
    margin: auto;
    display: flex;
    @media (max-width: 991px) {
      width: 100%;
      height: auto;
      flex-wrap: wrap;
    }
  }
  @media (max-width: 991px) {
    height: auto;
  }
`;

export const Logo = styled.div`
  width: 20%;
  img {
    width: 112px;
    margin-top: 24px;
  }
  @media (max-width: 991px) {
    width: 100%;
  }
`;

export const Search = styled.div`
  width: 50%;
  .input-wrapper {
    background-color: ${themeConf.inputBg};
    width: 60%;
    height: 37px;
    border: 1px solid ${themeConf.inputBorder};
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
  @media (max-width: 991px) {
    width: 100%;
    order: 1;
    .input-wrapper {
      width: 100%;
      margin-top: 15px;
      margin-bottom: 20px;
    }
  }
`;

export const NotificationSection = styled.div`
  width: 30%;
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
          background-image: url("https://i.ibb.co/vvZ4C4X/5.png");
        }
        img {
          width: auto;
          height: 7px;
          margin-top: 15px;
          margin-left: 4px;
        }
      }
      &.language {
        margin-right: 20px;
        .check-button {
          display: inline-block;
          margin-left: 0;
          vertical-align: super;
          label {
            background-color: #92929d40;
            padding: 2px 7px;
            color: #999;
            font-size: 14px;
            cursor: pointer;
            &.first {
              border-radius: 4px 0 0 4px;
            }
            &.second {
              border-radius: 0 4px 4px 0;
            }
          }
          input {
            display: none;
          }
          input[type="radio"]:checked + label {
            background-color: #0877ff;
            color: #fff;
          }
        }
      }
      &.mode-change {
        margin-right: 20px;
        .check-button {
          display: inline-block;
          margin-left: 0;
          vertical-align: super;
          label {
            background-color: #92929d40;
            padding: 2px 7px;
            color: #999;
            font-size: 14px;
            cursor: pointer;
            border-radius: 4px;
            &.colored {
              background-color: #0877ff;
              color: #fff;
            }
          }
          input {
            display: none;
          }
          input[type="checkbox"]:checked + label {
            color: #fff;
          }
        }
      }
    }
  }
  @media (max-width: 991px) {
    width: 100%;
    height: 54px;
    margin-top: -20px;
    ul {
      text-align: left;
    }
  }
`;
