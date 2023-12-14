import styled from "styled-components";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  height: 420px;
  .image {
    width: 100%;
    position: relative;
    img {
      max-width: 100%;
      width: 100%;
    }
    .price {
      background: #5cb85c;
      color: #fff;
      text-shadow: 0 1px rgba(0, 0, 0, 0.3);
      position: absolute;
      font-size: 14px;
      left: -8px;
      top: 10px;
      padding: 3px 10px;
      z-index: 2;
      font-weight: bold;
    }
    .price::before {
      border: 4px solid transparent;
      border-top: 4px solid #348c34;
      border-right: 4px solid #348c34;
      content: "";
      position: absolute;
      left: 0;
      bottom: -8px;
    }
  }
  .card_content {
    background-color: #fff;
    width: 100%;
    height: 100%;
    padding: 20px;

    h3 {
      color: #222733;
      font-size: 25px;
      line-height: 35px;
    }
    p {
      color: #333333;
      font-size: 17px;
      line-height: 24px;
      padding: 10px 0;
    }
    div {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 150px;
      height: 40px;
      background: #2e51d6;
      font-size: 12px;
      line-height: 21px;
      color: #fff;
      border-radius: 20px;
      cursor: pointer;
      a {
        text-decoration: none;
        color: inherit;
      }
    }
  }
`;

export { Wrap };
