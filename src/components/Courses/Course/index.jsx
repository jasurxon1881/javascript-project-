import React, { useContext } from "react";
import { Wrap, Opener, Container, Main } from "./style";
import userImg from "../../../assets/images/user.jpg";
import Card from "../../Generic/Card";
import Footer from "../../Footer";
import { AuthContext } from "../../../context/Auth";
import img1 from "../../../assets/images/about.jpg";
import img2 from "../../../assets/images/contact.jpg";
import img3 from "../../../assets/images/main-1.jpg";
export default function Course({ data }) {
  console.log(data, "data");
  const navigation = [1, 2, 3, 4, 5, 6, 7, 8];
  const [{ token }] = useContext(AuthContext);

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
      <Opener>
        <div className="layover"></div>
        <span> {data?.title}</span>
      </Opener>
      <Container>
        <Main>
          <Main.Content>
            <h3>Course Navigation</h3>
            <ul>
              {navigation?.map((item, index) => (
                <li key={index}>How to Make It Stylish and Functional?</li>
              ))}
            </ul>
          </Main.Content>
          <Main.Features>
            <div className="main_features">
              <div className="status">
                <h4>Current Status</h4>
                <span>not enrolled</span>
              </div>
              <div className="price">
                <h4>Price</h4>
                <h3>$150</h3>
              </div>
              <div className="start">
                <h4>Get Started </h4>
                {token ? (
                  <span className="login">Buy Course</span>
                ) : (
                  <span className="login">Login</span>
                )}
              </div>
            </div>
            <div className="description">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
              consequat. Duis autem vel eum iriure dolor in hendrerit in
              vulputate velit esse molestie consequat, vel illum dolore eu
              feugiat nulla facilisis at vero eros et accumsan et iusto odio
              dignissim qui.
              <br />
              <br />
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper suscipit lobortis.
            </div>

            <div className="author_wrap">
              <img src={userImg} alt="userImg" />
              <div className="info_wrap">
                <span>About Author</span>
                <h3>Dorothy Finley</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                  aliquam erat volutpat. Ut wisi enim ad minim.
                </p>
              </div>
            </div>
            <h3 className="mayLike">You May Also Like</h3>

            <div className="courses_wrap">
              {mayLike?.map((item, index) => (
                <Card key={index} data={item} />
              ))}
            </div>
          </Main.Features>
        </Main>
      </Container>
      <Container url="https://learnify.axiomthemes.com/wp-content/uploads/2019/02/Home-2-Footer.png">
        <Footer />
      </Container>
    </Wrap>
  );
}
