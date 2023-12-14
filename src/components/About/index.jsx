import React, { useEffect } from "react";
import { Container, ChooseUs, Opener, Wrap } from "./style";
import whyUs1 from "../../assets/images/whyUs1.jpg";
import whyUs2 from "../../assets/images/whyUs2.jpg";
import Footer from "../Footer";
import Testimonials from "../Testimonials";
export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Wrap>
      <Opener>About Us</Opener>
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
            <img src={whyUs2} className="whyUs2" alt="whyUs1" />
          </div>
        </ChooseUs>
      </Container>
      <Container>
        <Testimonials />
      </Container>
      <Container url="https://learnify.axiomthemes.com/wp-content/uploads/2019/02/Home-2-Footer.png">
        <Footer />
      </Container>
    </Wrap>
  );
}
