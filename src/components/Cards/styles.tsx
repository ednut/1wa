import styled from 'styled-components';

export const CardContainer = styled.div`
  width: 48%;
  background-color: #ffffff;
  margin-bottom: 40px;
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
        span {
          width: 70%;
          font-weight: 600;
          font-size: 18px;
          line-height: 27px;
        }
        button {
          width: 80px;
          mix-blend-mode: normal;
          opacity: 0.5;
          border: 1px solid #0062ff;
          box-sizing: border-box;
          border-radius: 10px;
          color: #0062ff;
          cursor: pointer;
          &.active {
            background: #0062ff;
            color: #fff;
          }
        }
      }
      .handle {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        letter-spacing: 0.1px;
        font-size: 14px;
        line-height: 16px;
        color: #92929d;
        margin-bottom: 5px;
      }
      .details {
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: normal;
        line-height: 26px;
        letter-spacing: 0.1px;
        color: #44444f;
      }
    }
  }
`;
