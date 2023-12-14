import React, { useEffect, useState } from "react";
import { Container, CoursesWrap, Opener, Wrap } from "./style";
import Card from "../Generic/Card";
import Footer from "../Footer";
import useRequest from "../../hooks/useRequest";
import { Spin } from "antd";

export default function Courses() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const { request } = useRequest();

  useEffect(() => {
    request({
      url: "course/getAllCourses",
    })
      .then((res) => {
        setData(res);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);
  console.log(data, "data");
  return (
    <Wrap>
      <Opener i={0}>
        <div className="overlay"></div>
        <span className="title"> Our Courses</span>
      </Opener>
      <Container>
        <CoursesWrap>
          {loading ? (
            <div className="ant_spin">
              <Spin size="large" />
              <div>Loading...</div>
            </div>
          ) : (
            data?.map((item, i) => <Card key={i} data={item} />)
          )}
        </CoursesWrap>
      </Container>
      <Container url="https://learnify.axiomthemes.com/wp-content/uploads/2019/02/Home-2-Footer.png">
        <Footer />
      </Container>
    </Wrap>
  );
}
