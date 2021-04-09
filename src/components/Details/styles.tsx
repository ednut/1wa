import styled from "styled-components";

export const DetailsContainer = styled.div`
  width: 100;
  height: 90vh;
  overflow: hidden;
  background-color: #ffffff;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 991px) {
    width: 100%;
  }
  .content {
    width: 40%;
    position: relative;
    padding: 10rem 0rem 10rem 8rem;
    @media (max-width: 991px) {
      width: 100%;
      padding: 3rem 1rem;
      text-align: center;
    }
    .name {
      font-weight: 600;
      font-size: 40px;
      line-height: 43px;
      margin-bottom: 10px;
    }
    .handle {
      font-family: "Roboto", sans-serif;
      font-weight: 400;
      letter-spacing: 0.1px;
      font-size: 20px;
      line-height: 35px;
      color: #92929d;
      margin-bottom: 5px;
    }
    .discription {
      font-family: "Roboto", sans-serif;
      font-style: normal;
      font-weight: normal;
      line-height: 26px;
      letter-spacing: 0.1px;
      color: #44444f;
      margin-top: 13px;
      font-size: 20px;
    }
    img {
      position: absolute;
      top: 0;
      left: 0;
      @media (max-width: 991px) {
        width: 100%;
      }
    }
    .img {
      display: inline-block;
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      width: 200px;
      height: 200px;
      border-radius: 50%;
      border: 4px solid #fff;
      display: none;
      @media (max-width: 991px) {
        display: block;
        margin: auto;
        margin-bottom: 20px;
      }
    }
  }
  .image {
    clip-path: ellipse(60% 76% at 86% 19%);
    background: #4776e6;
    background: -webkit-linear-gradient(to right, #4776e6, #8e54e9);
    background: linear-gradient(to right, #4776e6, #8e54e9);
    height: 90vh;
    width: 60%;
    position: relative;
    @media (max-width: 991px) {
      width: 100%;
      display: none;
    }
    .img {
      display: inline-block;
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      width: 300px;
      height: 300px;
      border-radius: 50%;
      border: 4px solid #fff;
      position: absolute;
      right: 50%;
      top: 10rem;
      margin-right: -20rem;
    }
  }
`;
