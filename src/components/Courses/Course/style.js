import styled, { css } from "styled-components";
import bg from "../../../assets/images/course.jpg";

const center = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrap = styled.div`
  position: relative;
`;
const Opener = styled.div`
  ${center}
  height: 50vh;
  color: #fff;
  font-size: 50px;
  line-height: 1em;
  position: relative;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${bg});
  .layover {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.45);
  }
  span {
    position: relative;
    z-index: 10;
  }
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  background: ${({ bg }) => bg};
  background-image: ${({ url }) => (url ? `url(${url})` : "")};
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Main = styled.div`
  display: flex;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  height: fit-content;
  margin-top: 100px;
  padding: 50px 0;
`;

Main.Content = styled.div`
  flex: 1.5;
  position: sticky;
  top: 0;
  background-color: #f2f6f7;
  margin-right: 60px;
  padding: 60px 45px;
  height: 90vh;
  h3 {
    font-size: 22px;
    line-height: 29px;
    color: #1f242e;
    padding-bottom: 25px;
    margin-bottom: 25px;
    border-bottom: 4px solid #e2e7ed;
  }
  ul {
    list-style: none;
  }
  li {
    display: flex;
    align-items: center;
    font-size: 17px;
    line-height: 29px;
    color: #6c6f73;
    padding-right: 2rem;
    margin-bottom: 10px;
    border-bottom: 1px solid #e2e7ed;
    cursor: pointer;
  }
  li::before {
    content: "";
    display: block;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    border: 2px solid #e2e7ed;
    background-color: #fff;
    margin-right: 10px;
  }
`;

const centered = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
Main.Features = styled.div`
  flex: 3;
  .main_features {
    display: flex;
    align-items: center;
    background-color: #eaf0f1;
    width: 100%;
    height: 110px;
    h4 {
      font-size: 13px;
      line-height: 29px;
      color: #1f242e;
      margin-bottom: 8px;
    }
    .status {
      ${centered}
      flex: 1;
    }
    .status span {
      background-color: #ffd200;
      color: rgba(0, 0, 0, 0.65);
      text-align: center;
      padding: 5px 12px;
      text-transform: uppercase;
      font-weight: 700;
      letter-spacing: 0.5px;
      font-size: 11px;
      border-radius: 12px;
    }
    .price {
      ${centered}
      flex: 1;
      border-right: 2px solid #bec5cb;
      border-left: 2px solid #bec5cb;
      h3 {
        font-size: 32px;
        line-height: 32px;
      }
    }
    .start {
      ${centered}
      flex: 1;
      span {
        color: #fb3434;
        font-size: 14px;
        text-decoration: underline;
        cursor: pointer;
      }
    }
  }
  .description {
    font-size: 17px;
    line-height: 29px;
    color: #6c6f73;
    margin: 20px 0;
  }

  .author_wrap {
    display: flex;
    margin-top: 3em;
    padding: 40px;
    position: relative;
    background-color: #fff;
    border: 1px solid #dadedf;
    img {
      width: 71px;
      height: 71px;
      margin-right: 20px;
    }
    span {
      font-size: 15px;
      line-height: 18px;
      color: #8f9093;
    }
    h3 {
      font-size: 19px;
      line-height: 25px;
      color: #1f242e;
      margin: 10px 0 20px 0;
    }
    p {
      font-size: 17px;
      line-height: 29px;
      color: #6c6f73;
    }
  }
  .mayLike {
    margin: 100px 0;
    color: #1f242e;
    font-size: 40px;
    line-height: 45px;
  }
  .courses_wrap {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
  }
`;
export { Wrap, Opener, Container, Main };
