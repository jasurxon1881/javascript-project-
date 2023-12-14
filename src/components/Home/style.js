import styled, { css } from "styled-components";
import img1 from "../../assets/images/main-1.jpg";
import img2 from "../../assets/images/main-2.jpg";
import { ReactComponent as Robot } from "../../assets/icon/robot.svg";
import { ReactComponent as Badge } from "../../assets/icon/badge.svg";
import { ReactComponent as Laptop } from "../../assets/icon/laptop.svg";
import { ReactComponent as Cap } from "../../assets/icon/cap.svg";
import Slider from "react-slick";

let imgs = [img1, img2];

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
  max-width: 100vw;
  width: 100%;
  /* align-items: center; */
`;

const SwiperWrap = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  @media (max-width: 1200px) {
    height: fit-content;
  }
`;

const SliderJs = styled(Slider)`
  width: 100%;
  height: fit-content;
  .slick-prev {
    left: 3% !important;
    z-index: 1;
  }

  .slick-dots {
    bottom: 0;
  }
  .slick-next {
    right: 3% !important;
    z-index: 1;
  }
  .slick-prev:before,
  .slick-next:before {
    font-size: 45px;
  }

  @media (max-width: 1200px) {
    .slick-prev:before,
    .slick-next:before {
      font-size: 20px;
    }
  }
`;
const SwiperSlideJs = styled.div`
  ${center}
  display: flex !important;
  flex-direction: column;
  background-position: center;
  background-size: cover;
  height: ${({ height }) => (height ? height : "100vh")};
  color: #fff;
  .subtitle {
    font-size: 15px;
    line-height: 32px;
    font-weight: 500;
  }
  .title {
    font-size: 75px;
    line-height: 76px;
    margin: 30px 0;
  }
  .home_cta_wrap {
    display: flex;
    align-items: center;
    gap: 10px;
    button {
      ${center}
      width: 200px;
      height: 50px;
      font-size: 12px;
      outline: none;
      border: none;
      border-radius: 20px;
      cursor: pointer;
      transition: all 0.25s ease-in-out;
    }
    .courses {
      color: #13191f;
      background-color: #ffffff;
    }

    .courses:hover {
      color: #fff;
      background: #13191f;
    }
    .more {
      color: #fff;
      background: #fb3434;
      a {
        color: inherit;
        text-decoration: none;
      }
    }
  }
  text-align: center;
  padding: 0 25%;
  background-image: ${({ index }) => (index ? `url(${imgs[index]})` : "")};

  @media (max-width: 1200px) {
    height: 300px;
    .subtitle {
      font-size: 11px;
      line-height: 22px;
    }
    .title {
      font-size: 30px;
      line-height: 32px;
    }
    .home_cta_wrap button {
      width: 150px;
      height: 40px;
      font-size: 11px;
    }
    padding: 0 15%;
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
const Offer = styled.div`
  display: flex;
  align-items: center;
  height: 80vh;
  row-gap: 28px;
  ${maxWidth}
  .offer_content {
    display: grid;
    flex: 1;
    row-gap: 30px;
    padding-right: 50px;
    h4 {
      font-size: 14px;
      line-height: 18px;
      color: #3d19cc;
    }
    h2 {
      font-size: 50px;
      line-height: 50px;
      color: #000;
    }
    p {
      font-size: 17px;
      line-height: 29px;
      color: #6c6f73;
    }
    div {
      width: 170px;
      height: 50px;
      background: #3d19cc;
      border-radius: 20px;
      font-size: 12px;
      line-height: 21px;
      color: #fff;
      font-weight: 600;
      cursor: pointer;

      ${center}
      a {
        color: inherit;
        text-decoration: none;
      }
    }
  }

  .offer_icons {
    display: grid;
    grid-template-columns: 1fr 1fr;
    flex: 1;
    gap: 50px;
    .icon-card {
      ${center}
      flex-direction: column;
      width: 100%;
      height: 270px;
      border: 1px solid #dadedf;
      cursor: pointer;

      h5 {
        font-size: 22px;
        line-height: 26px;
        color: #1f242e;
        margin-top: 20px;
      }
    }
    .icon-card:hover {
      box-shadow: 0 5px 30px rgba(0, 0, 0, 0.05);
    }
  }
  @media (max-width: 1200px) {
    flex-direction: column;
    height: fit-content;
    padding-top: 50px;
    .offer_content {
      padding: 0 30px;
      h4 {
        font-size: 12px;
        line-height: 15px;
      }
      h2 {
        font-size: 30px;
        line-height: 32px;
      }
      p {
        font-size: 13px;
        line-height: 20px;
      }
      div {
        width: 130px;
        height: 40px;
        font-size: 11px;
      }
    }
    .offer_icons {
      display: flex;
      width: 80%;
      flex-direction: column;
    }
  }
`;

const Icon = styled.div``;

Icon.Cap = styled(Cap)`
  width: 90px;
  height: 90px;
`;
Icon.Robot = styled(Robot)`
  width: 90px;
  height: 90px;
`;
Icon.Laptop = styled(Laptop)`
  width: 90px;
  height: 90px;
`;
Icon.Badge = styled(Badge)`
  width: 90px;
  height: 90px;
`;

const Courses = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #f2f6f7;
  height: 100vh;
  padding-top: 110px;
  ${maxWidth}
  .sub_title {
    color: #3d19cc;
    font-size: 14px;
    line-height: 18px;
  }
  h2 {
    font-size: 50px;
    line-height: 50px;
    color: #222733;
    margin: 30px 0;
  }
  .cards {
    display: flex;
    width: 100%;
    gap: 20px;
    justify-content: space-between;
  }
  .view_more {
    ${center}
    width: 250px;
    height: 50px;
    color: #fff;
    font-size: 12px;
    line-height: 21px;
    background: #fb3434;
    border-radius: 30px;
    margin-top: 100px;
    cursor: pointer;
  }

  @media (max-width: 1200px) {
    height: fit-content;
    margin-bottom: 50px;
    .cards {
      flex-direction: column;
      padding: 20px 30px;
    }
    .sub_title {
      font-size: 12px;
      line-height: 15px;
    }
    h2 {
      font-size: 30px;
      line-height: 32px;
      margin: 15px 0;
    }
    .view_more {
      width: 250px;
      height: 40px;
      font-size: 12px;
      line-height: 16px;
      margin-top: 0px;
    }
  }
`;

const Testimonials = styled.div`
  ${maxWidth}
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
    flex-direction: column;
    height: fit-content;
    .content {
      padding: 50px 20px;
      h5 {
        font-size: 12px;
        line-height: 16px;
      }
      h2 {
        font-size: 30px;
        line-height: 32px;
      }
      p {
        font-size: 15px;
        line-height: 20px;
      }
    }

    .image_wrap {
      display: none;
    }
  }
`;

const Footer = styled.div`
  ${maxWidth}
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
  height: 500px;
  color: white;
  .links_wrap {
    display: flex;
    flex-direction: column;
    height: 40%;
    font-size: 50px;
    font-family: Metal-Regular;
    justify-content: space-between;

    flex: 1;
    h3 {
      font-size: 22px;
      line-height: 29px;
      color: #f9f9f9;
    }
    span {
      font-size: 17px;
      line-height: 20px;
      color: #9f9f9f;
      cursor: pointer;
      transition: all 0.3s ease;
      width: fit-content;
    }
    span:hover {
      color: #fff;
      margin-left: 5px;
    }
  }

  .icons {
    display: flex;
    .facebook {
      font-size: 12px;
      ::before {
        content: "\e873";
        font-size: 12px;
      }
    }
  }
`;
export {
  Wrap,
  Courses,
  Container,
  SliderJs,
  SwiperSlideJs,
  Offer,
  Icon,
  SwiperWrap,
  Testimonials,
  ChooseUs,
  Footer,
};
