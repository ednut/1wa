import styled from "styled-components";
import * as themeConf from "../../theme";

export const CardsContainer = styled.div`
  width: 48%;
  background-color: ${themeConf.cardBg};
  border-radius: 15px;
  margin-bottom: 40px;
  @media (max-width: 991px) {
    width: 100%;
  }
  .banner {
    height: 100px;
    width: 100%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    border-radius: 15px 15px 0 0;
  }
  .cont-wrap {
    position: relative;
    display: flex;
    border-radius: 0 0 15px 15px;
    padding: 10px 20px 5px 20px;
    display: block;
    .avata {
      width: 20%;
      margin-top: -50px;
      span {
        display: inline-block;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        width: 86px;
        height: 86px;
        border-radius: 50%;
        border: 2px solid #fff;
      }
    }
    .content {
      width: 100%;
      padding: 0 0 20px 20px;
      .title {
        display: flex;
        justify-content: space-between;
        margin-bottom: 5px;
        a {
          color: ${themeConf.cardText};
        }
        span.link {
          width: 70%;
          font-weight: 600;
          font-size: 18px;
          line-height: 27px;
        }
        span.icon {
          border: 1px solid #92929d82;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          text-align: center;
          cursor: pointer;
          i {
            display: inline-block;
            color: #92929d82;
          }
          &.active {
            border: 1px solid gold;
            i {
              display: inline-block;
              color: gold;
            }
          }
        }
        button {
          width: 80px;
          mix-blend-mode: normal;
          border: 1px solid #fff;
          box-sizing: border-box;
          border-radius: 10px;
          color: ${themeConf.cardBtnText};
          cursor: pointer;
          background: ${themeConf.cardBtn};
          &.active {
            background: #0062ff;
            color: #fff;
          }
        }
      }
      .handle {
        font-family: "Roboto", sans-serif;
        font-weight: 400;
        letter-spacing: 0.1px;
        font-size: 14px;
        line-height: 16px;
        color: #92929d;
        margin-bottom: 5px;
      }
      .details {
        font-family: "Roboto", sans-serif;
        font-style: normal;
        font-weight: normal;
        line-height: 26px;
        letter-spacing: 0.1px;
        color: ${themeConf.cardDetailsText};
      }
    }
  }
`;
