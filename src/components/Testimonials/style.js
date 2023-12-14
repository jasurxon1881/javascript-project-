import styled from "styled-components";

const Wrap = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  position: relative;
  height: 600px;
  position: relative;

  .test_wrap {
    display: flex;
    align-items: center;
    flex-direction: column;
    row-gap: 40px;
    img {
      margin: 0 auto;
      width: 80px;
      height: 80px;
      border-radius: 50%;
    }
    p {
      font-size: 21px;
      line-height: 36px;
      letter-spacing: -0.4px;
      font-weight: 400;
      color: #1f242e;
    }
    h3 {
      color: #1f242e;
      font-size: 19px;
      line-height: 24px;
      font-weight: 600;
    }
    span {
      font-size: 15px;
      line-height: 20px;
      font-weight: 400;
      color: #6c6f73;
      margin-top: -20px;
    }
  }
  .backText {
    position: absolute;
    top: 50%;
    left: 50%;
    color: #1c1c1c0d;
    font-size: 192px;
    font-weight: 600;
    letter-spacing: -7px;
    transform: translate(-50%, -50%);
  }
  .slick-prev:before,
  .slick-next:before {
    color: #333;
    font-size: 35px;
  }
  @media (max-width: 1200px) {
    height: 300px;
    .backText {
      font-size: 60px;
    }
    .test_wrap {
      row-gap: 15px;
      p {
        font-size: 16px;
        line-height: 26px;
      }
    }
  }
`;

export { Wrap };
