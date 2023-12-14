import React from "react";
import {
  Container,
  Offer,
  SliderJs,
  SwiperSlideJs,
  Wrap,
  Icon,
  SwiperWrap,
  Courses,
  ChooseUs,
} from "./style";
import Card from "../Generic/Card";
import whyUs1 from "../../assets/images/whyUs1.jpg";
import whyUs2 from "../../assets/images/whyUs2.jpg";
import img1 from "../../assets/images/about.jpg";
import img2 from "../../assets/images/contact.jpg";
import img3 from "../../assets/images/main-1.jpg";
import Footer from "../Footer";
import Testimonials from "../Testimonials";
import { NavLink } from "react-router-dom";

export default function Home() {
  const settings = {
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          infinite: true,
          dots: true,
          arrows: false,
        },
      },
    ],
  };
  const mayLike = [
    {
      title: "Some Title here",
      price: "200",
      image: img1,
      description: "Some text Some textSome textSome textSome text",
    },
    {
      title: "Some Title here",
      price: "200",
      image: img2,
      description: "Some text Some textSome textSome textSome text",
    },
    {
      title: "Some Title here",
      price: "200",
      image: img3,
      description: "Some text Some textSome textSome textSome text",
    },
  ];
  return (
    <Wrap>
      <SwiperWrap>
        <SliderJs {...settings}>
          <SwiperSlideJs index="0">
            <h3 className="subtitle">MAZZAVOT ONLINE COURSES</h3>
            <h2 className="title">
              Distant learning is the future of education
            </h2>
            <div className="home_cta_wrap">
              {/* <button className="courses">VIEW COURSES</button> */}
              <button className="more">
                <NavLink to="/our-courses">VIEW COURSES</NavLink>
              </button>
            </div>
          </SwiperSlideJs>
          <SwiperSlideJs index="1">
            <h3 className="subtitle">MAZZAVOT ONLINE COURSES</h3>
            <h2 className="title">
              Distant learning is the future of education
            </h2>
            <div className="home_cta_wrap">
              {/* <button className="courses">VIEW COURSES</button> */}
              <button className="more">
                <NavLink to="/our-courses">VIEW COURSES</NavLink>
              </button>
            </div>
          </SwiperSlideJs>
        </SliderJs>
      </SwiperWrap>
      <Container>
        <Offer>
          <div className="offer_content">
            <h4>WHAT WE OFFER</h4>
            <h2>We Organize Effective Learning</h2>
            <p>
              We’ll help to plan and manage your studying process. Our success
              means being with you every step of the way: from signing up for
              course to receiving the degree.
            </p>
            <div>
              <NavLink to="/about">ABOUT US</NavLink>
            </div>
          </div>
          <div className="offer_icons">
            <div className="icon-card">
              <Icon.Robot />
              <h5>Online Courses</h5>
            </div>
            <div className="icon-card">
              <Icon.Cap />
              <h5>Powerful Program</h5>
            </div>
            <div className="icon-card">
              <Icon.Badge />
              <h5>Personal Teacher</h5>
            </div>
            <div className="icon-card">
              <Icon.Laptop />
              <h5>24/7 Support</h5>
            </div>
          </div>
        </Offer>
      </Container>
      <Container bg="#f2f6f7">
        <Courses>
          <h4 className="sub_title">WHAT WE TEACH</h4>
          <h2>Our Courses</h2>
          <div className="cards">
            {mayLike?.map((item, index) => (
              <Card key={index} data={item} />
            ))}
          </div>
          <div className="view_more">VIEW MORE COURSES</div>
        </Courses>
      </Container>
      <Container>
        <Testimonials />
      </Container>
      <Container bg="#f2f6f7">
        <ChooseUs>
          <div className="content">
            <h5>WHY CHOOSE US</h5>
            <h2>Distant learning for better results</h2>
            <p>
              Modern online education can provide more learning possibilities
              than traditional schools and universities
            </p>
            <div className="details">
              <div className="experience">
                <div>Experience</div>
                <span>100+</span>
              </div>
              <div className="teacher">
                <div>Teachers</div>
                <span>100+</span>
              </div>
            </div>
          </div>
          <div className="image_wrap">
            <img src={whyUs1} className="whyUs1" alt="whyUs1" />
            <img src={whyUs2} className="whyUs2" alt="whyUs2" />
          </div>
        </ChooseUs>
      </Container>
      <Container url="https://learnify.axiomthemes.com/wp-content/uploads/2019/02/Home-2-Footer.png">
        <Footer />
      </Container>
    </Wrap>
  );
}
