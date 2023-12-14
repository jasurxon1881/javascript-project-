import styled from "styled-components";
import { ReactComponent as Cart } from "../../assets/icon/cart.svg";
import { ReactComponent as Search } from "../../assets/icon/search.svg";
import { ReactComponent as Menu } from "../../assets/icon/menu.svg";

const Wrap = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  height: 110px;
  background-color: #fff;
  padding: 22px 40px 22px 40px;

  .ant-modal .ant-modal-title {
    color: red !important;
    font-size: 30px !important;
  }
  @media (max-width: 1200px) {
    height: 90px;
    .desktop {
      display: none;
    }
    .mobile {
      display: flex;
    }
  }
`;

const Logo = styled.div`
  font-family: Metal-Regular;
  font-weight: 600;
  font-size: 32px;
  @media (max-width: 1200px) {
    font-size: 26px;
  }
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 25px;
  a {
    text-decoration: none;

    color: #1f242e;
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    position: relative;
  }

  .active {
    ::after {
      content: "";
      display: block;
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 2px;
      background-color: #1f242e;
    }
  }
`;

const CtaWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 250px;
  width: 100%;
  @media (max-width: 1200px) {
    max-width: 100px;
  }
`;

const CtaBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 140px;
  height: 45px;
  color: #fff;
  background: #27ab43;
  font-size: 12px;
  border-radius: 15px;
  font-size: 600;
  cursor: pointer;
  @media (max-width: 1200px) {
    display: none;
  }
`;

const Icon = styled.div``;

Icon.Search = styled(Search)`
  width: 29px;
  height: 29px;
  cursor: pointer;
  @media (max-width: 1200px) {
    width: 22px;
    height: 22px;
  }
`;
Icon.Cart = styled(Cart)`
  width: 30px;
  height: 30px;
  cursor: pointer;
  @media (max-width: 1200px) {
    width: 22px;
    height: 22px;
  }
`;

Icon.Menu = styled(Menu)`
  width: 22px;
  height: 22px;
  cursor: pointer;
  display: none;
  @media (max-width: 1200px) {
    display: block;
  }
`;

export { Wrap, Logo, Links, CtaWrap, Icon, CtaBtn };
