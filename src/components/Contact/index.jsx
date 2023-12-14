import React from "react";
import { Contacts, Icon, MainContact, Wrap } from "./style";
import { Container, Opener } from "../Courses/style";
import GoogleMapReact from "google-map-react";
import Footer from "../Footer";

const Contact = () => {
  return (
    <Wrap>
      <Opener i={1}>
        <div className="overlay"></div>
        <span className="title"> Contact Us</span>
      </Opener>
      <Container>
        <Contacts>
          <div className="card">
            <Icon.Earth />
            <h3>Address</h3>
            <p>Urban Centre 402, Queen Street , 2055 London</p>
          </div>
          <div className="card">
            <Icon.Phone />
            <h3>Phone</h3>
            <p>+0 (555) 123 45 67</p>
            <p>+0 (555) 123 45 67</p>
          </div>
          <div className="card">
            <Icon.Send />
            <h3>Mail</h3>
            <p>info@mail.com</p>
            <p>job@mail.com</p>
          </div>
        </Contacts>
      </Container>
      <MainContact>
        <div className="map">
          <GoogleMapReact
            bootstrapURLKeys={{
              key: "AIzaSyBg33f-iEoZaA1wEVVqKiPquhdWacg3Dh0",
              language: "en",
            }}
            yesIWantToUseGoogleMapApiInternals
            defaultCenter={{ lat: 41.258117, lng: 69.150025 }}
            defaultZoom={13}
          />
        </div>
        <div className="mailUs">
          <h3>MAIL US</h3>
          <h2>Drop a Line</h2>
          <input type="text" name="name" placeholder="Name" />
          <input type="email" name="email" placeholder="Email" />
          <textarea
            name="message"
            id=""
            cols="30"
            rows="10"
            placeholder="How can we help you? Feel free to get in touch!"
          ></textarea>
          <button>SUBMIT</button>
        </div>
      </MainContact>
      <Container url="https://learnify.axiomthemes.com/wp-content/uploads/2019/02/Home-2-Footer.png">
        <Footer />
      </Container>
    </Wrap>
  );
};
export default Contact;
