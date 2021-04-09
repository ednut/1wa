import styled from "styled-components";

export const FilterContainer = styled.div`
  margin-top: 0px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  @media (max-width: 991px) {
    flex-wrap: wrap;
  }
  .title {
    width: 40%;
    font-weight: 600;
    font-size: 24px;
    line-height: 36px;
    letter-spacing: 0.1px;
    color: #171725;
    @media (max-width: 991px) {
      width: 100%;
    }
  }
  .filter-wrap {
    width: 40%;
    ul {
      margin: 0;
      padding: 0;
      text-align: right;
      @media (max-width: 991px) {
        text-align: center;
        margin-top: 20px;
        margin-bottom: 20px;
      }
      li {
        display: inline-block;
        margin-left: 20px;
        vertical-align: middle;
        @media (max-width: 991px) {
          margin-right: 20px;
          margin-left: 0;
        }
        .search {
          width: 38px;
          height: 38px;
          background-color: #fff;
          border-radius: 10px;
          display: inline-block;
          text-align: center;
          img {
            margin-top: 10px;
          }
        }
        .filter {
          width: auto;
          padding: 0 10px;
          height: 38px;
          background-color: #fff;
          border-radius: 10px;
          display: inline-block;
          line-height: 35px;
          .sort-by {
            font-style: normal;
            font-weight: normal;
            font-size: 14px;
            line-height: 16px;
            letter-spacing: 0.1px;
            font-family: "Roboto", sans-serif;
            color: #696974;
            font-weight: 400;
          }
          select {
            font-family: Roboto;
            font-style: normal;
            font-weight: 500;
            font-size: 14px;
            line-height: 16px;
            letter-spacing: 0.1px;
            font-weight: 500;
            color: #44444f;
            border: none;
            outline: none;
            -webkit-appearance: none;
            -moz-appearance: none;
            text-indent: 1px;
            text-overflow: "";
            padding-right: 10px;
            padding-left: 10px;
            &::-ms-expand {
              display: none;
            }
          }
          .arrow-icon {
            padding-left: 8px;
            display: inline-block;
            border-left: 3px solid #fafafb;
          }
        }
        .filter-icon {
          display: inline-block;
          padding-top: 10px;
          background-color: #ffffff;
          border-radius: 7px;
          display: inline-block;
          text-align: center;
          padding: 0 10px;
          img {
            margin-top: 9px;
          }
        }
      }
    }
    @media (max-width: 991px) {
      width: 100%;
    }
  }
`;
