import styled from "styled-components";
import { ReactComponent as Phone } from "../../assets/icon/phone.svg";
import { ReactComponent as Earth } from "../../assets/icon/earth.svg";
import { ReactComponent as Send } from "../../assets/icon/send.svg";
const Wrap = styled.div``;

const Contacts = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: auto;
  display: flex;
  align-items: center;
  height: 60vh;
  column-gap: 30px;
  .card {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: center;
    max-width: 400px;
    width: 100%;
    height: 350px;
    padding: 4em;
    border: 1px solid #dadedf;
    transition: box-shadow 0.3s ease-out;

    h3 {
      font-size: 27px;
      line-height: 32px;
      color: #1f242e;
      margin: 10px 0;
    }
    p {
      font-size: 17px;
      line-height: 27px;
      color: #6c6f73;
    }
  }
  .card:hover {
    box-shadow: 0 5px 30px rgba(0, 0, 0, 0.05);
  }
  @media (max-width: 1200px) {
    margin: 100px 50px;
    flex-wrap: wrap;
    height: fit-content;
  }
`;

const Icon = styled.div``;

Icon.Phone = styled(Phone)`
  width: 70px;
  height: 70px;
`;
Icon.Earth = styled(Earth)`
  width: 70px;
  height: 70px;
`;
Icon.Send = styled(Send)`
  width: 70px;
  height: 70px;
`;

const MainContact = styled.div`
  display: flex;
  height: 100vh;
  background: #f2f6f7;
  .map {
    flex: 1;
    .map-container {
      height: 100%;
      width: 100%;
    }
  }
  .mailUs {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    row-gap: 20px;
    padding-left: 50px;
    h3 {
      color: #3d19cc;
      font-size: 14px;
      line-height: 18px;
    }
    h2 {
      color: #222733;
      font-size: 26px;
      line-height: 42px;
    }
    input,
    textarea {
      font-size: 14px;
      color: #222733;
      width: 35em;
      height: 45px;
      border: 1px solid #e2e2e2;
      outline: none;
      padding: 12px 30px;
      border-radius: 26px;
      ::placeholder {
        color: #2c313c;
      }
    }
    textarea {
      height: 150px;
    }
    button {
      width: 160px;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 12px;
      line-height: 20px;
      color: #fff;
      font-weight: 600;
      border-radius: 30px;
      background: #27ab43;
      outline: none;
      border: none;
      cursor: pointer;
    }
  }
  @media (max-width: 1200px) {
    flex-direction: column;
    .mailUs {
      padding: 40px 20px;
    }
  }
`;

export { Wrap, Contacts, Icon, MainContact };
