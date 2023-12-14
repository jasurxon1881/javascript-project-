import React from "react";
import { Wrap } from "./style";
import { SliderJs, SwiperSlideJs } from "../Home/style";
import userImg from "../../assets/images/user.jpg";

export default function Testimonials() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Wrap>
      <div className="backText">Testimonials</div>
      <SliderJs {...settings} className="mySwiper">
        <SwiperSlideJs height="600px">
          <div className="test_wrap">
            <img src={userImg} alt="userImg" />
            <p>
              In the modern world sharing knowledge is one of the most important
              and wonderful opportunities given to humanity.
            </p>
            <h3>Jim Smith</h3>
            <span>Web Designer</span>
          </div>
        </SwiperSlideJs>
        <SwiperSlideJs height="600px">
          <div className="test_wrap">
            <img src={userImg} alt="userImg" />
            <p>
              In the modern world sharing knowledge is one of the most important
              and wonderful opportunities given to humanity.
            </p>
            <h3>Jim Smith</h3>
            <span>Web Designer</span>
          </div>
        </SwiperSlideJs>
        <SwiperSlideJs height="600px">
          <div className="test_wrap">
            <img src={userImg} alt="userImg" />
            <p>
              In the modern world sharing knowledge is one of the most important
              and wonderful opportunities given to humanity.
            </p>
            <h3>Jim Smith</h3>
            <span>Web Designer</span>
          </div>
        </SwiperSlideJs>
      </SliderJs>
    </Wrap>
  );
}
