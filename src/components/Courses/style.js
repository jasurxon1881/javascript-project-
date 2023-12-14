import styled from "styled-components";
import bg from "../../assets/images/courses.jpg";
import bg1 from "../../assets/images/contact.jpg";

const imgs = [bg, bg1];
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
`;
const Opener = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50vh;
  background-position: center center;
  background-size: cover;
  background-image: ${({ i }) => `url(${imgs[i]})`};
  color: #fff;
  font-size: 50px;
  line-height: 50px;
  position: relative;
  .title {
    position: relative;
    z-index: 100;
  }
  .overlay {
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    position: absolute;
    background-color: #000000;
    opacity: 0.4;
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
  position: relative;
  min-height: 40vh;

  .ant_spin {
    display: flex;
    align-items: center;
    flex-direction: column;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin: 20px;
    div {
      margin-bottom: 10px;
      font-size: 28px;
    }
  }
`;

const CoursesWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 40px;
  max-width: 1200px;
  width: 100%;
  margin: 50px auto;
  @media (max-width: 1200px) {
    height: fit-content;
    padding: 40px 20px;
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;
export { Wrap, Opener, Container, CoursesWrap };
