import styled, { css } from "styled-components";
import bg from "../../assets/images/about.jpg";

const center = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const maxWidth = css`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const Opener = styled.div`
  ${center}
  height: 50vh;
  background-position: top left;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${bg});
  color: #fff;
  font-size: 50px;
  line-height: 50px;
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

const ChooseUs = styled.div`
  ${maxWidth}
  display: flex;
  align-items: center;
  height: 80vh;

  .content {
    display: flex;
    flex-direction: column;
    flex: 2;
    row-gap: 30px;
    h5 {
      font-size: 14px;
      line-height: 18px;
      color: #3d19cc;
    }
    h2 {
      color: #1f242e;
      font-size: 50px;
      line-height: 50px;
    }
    p {
      color: #6c6f73;
      font-size: 19px;
      line-height: 29px;
    }
    .details {
      display: flex;
      align-items: center;
      .experience {
        margin-right: 70px;
      }
      .experience,
      .teacher {
        div {
          color: #1f242e;
          font-size: 19px;
          line-height: 27px;
          font-weight: 600;
          margin-bottom: 20px;
        }
      }
      .experience,
      .teacher {
        span {
          color: #1f242e;
          font-size: 60px;
          line-height: 60px;
          font-weight: 600;
        }
      }
    }
  }
  .image_wrap {
    flex: 3;
    height: 100%;
    position: relative;
    .whyUs2 {
      position: absolute;
      right: 0;
      top: 10%;
      height: auto;
      max-width: 100%;
    }
    .whyUs1 {
      position: absolute;
      left: 100px;
      bottom: 10%;
      height: 372px;
      width: 372px;
      z-index: 10;
    }
  }

  @media (max-width: 1200px) {
    height: fit-content;
    padding: 40px 20px;
    .image_wrap {
      display: none;
    }
    .content {
      h5 {
        font-size: 12px;
        line-height: 16px;
      }
      h2 {
        font-size: 30px;
        line-height: 32px;
      }
      p {
        font-size: 16px;
        line-height: 20px;
      }
    }
    .experience,
    .teacher {
      div {
        font-size: 14px;
        line-height: 19px;
        margin-bottom: 15px;
      }
    }
    .experience,
    .teacher {
      span {
        font-size: 30px;
        line-height: 30px;
      }
    }
  }
`;

export { Wrap, Opener, Container, ChooseUs };
