import styled from "styled-components";
import { ReactComponent as Facebook } from "../../assets/icon/facebook.svg";
import { ReactComponent as Instagram } from "../../assets/icon/instagram.svg";
import { ReactComponent as Twitter } from "../../assets/icon/twitter.svg";

const Wrap = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
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
    justify-content: space-between;
  }

  @media (max-width: 1200px) {
    flex-direction: column;
    align-items: start;
    padding: 20px;
    justify-content: space-between;
    .links_wrap {
      padding-bottom: 20px;
    }
  }
`;
const Icon = styled.div``;

Icon.Facebook = styled(Facebook)`
  width: 40px;
  border: 2px solid rgba(255, 255, 255, 0.15);
  border-radius: 50%;
  padding: 8px;
  cursor: pointer;
`;
Icon.Instagram = styled(Instagram)`
  width: 40px;
  border: 2px solid rgba(255, 255, 255, 0.15);
  border-radius: 50%;
  padding: 8px;
  margin: 0 15px;
  cursor: pointer;
`;
Icon.Twitter = styled(Twitter)`
  width: 40px;
  border: 2px solid rgba(255, 255, 255, 0.15);
  border-radius: 50%;
  padding: 8px;
  cursor: pointer;
`;
export { Wrap, Icon };
