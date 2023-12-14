import React, { useContext, useState } from "react";
import { Links, Logo, Wrap, CtaWrap, Icon, CtaBtn } from "./style";
import { NavLink, Outlet } from "react-router-dom";
import { data } from "../../utilits/navbar";
import { Modal } from "antd";
import { AuthContext } from "../../context/Auth";

export default function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [{ token }, dispatch] = useContext(AuthContext);
  console.log(token, "pp");
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <React.Fragment>
      <Modal
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
        className="modal_antd"
        width={"100%"}
      >
        <Links
          className="mobile"
          style={{
            height: "300px",
            flexDirection: "column",
            alignItems: "start",
          }}
        >
          {data?.map((item) => (
            <NavLink key={item?.id} to={item?.path}>
              {item?.title}
            </NavLink>
          ))}
          {!token ? (
            <NavLink to="/login">Login</NavLink>
          ) : (
            <NavLink to="/" onClick={() => dispatch({ type: "logout" })}>
              Logout
            </NavLink>
          )}
        </Links>
      </Modal>
      <Wrap className="navbar">
        <Logo alt="logo">Mazzavot</Logo>
        <Links className="desktop">
          {data?.map((item) => (
            <NavLink key={item?.id} to={item?.path}>
              {item?.title}
            </NavLink>
          ))}
          {!token ? (
            <NavLink to="/login">Login</NavLink>
          ) : (
            <NavLink to="/" onClick={() => dispatch({ type: "logout" })}>
              Logout
            </NavLink>
          )}
        </Links>
        <CtaWrap>
          <Icon.Cart />
          <Icon.Search />
          <Icon.Menu onClick={showModal} />
          <CtaBtn>GET TICKET</CtaBtn>
        </CtaWrap>
      </Wrap>
      <Outlet />
    </React.Fragment>
  );
}
