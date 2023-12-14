import React from "react";
// import TextField from "@mui/material/TextField";
// import { Button } from "@mui/material";
import { Container } from "./style";
import { NavLink, useNavigate } from "react-router-dom";
// import useRequest from '../../hooks/useRequest';
// import CircularProgress from "@mui/material/CircularProgress";
import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Button, Input, message } from "antd";
import useRequest from "../../hooks/useRequest";

const Register = () => {
  const { request } = useRequest();
  const navigate = useNavigate();
  const handleSubmit = (values, { resetForm }) => {
    request({
      url: "user/register",
      method: "post",
      body: values,
      includeToken: false,
    }).then((res) => {
      if (res?.token) {
        message.success("User Created!");
        navigate("/login");
      } else {
        message.error(res);
      }
      resetForm();
    });
  };
  return (
    <Container>
      <Formik
        initialValues={{
          email: "",
          password: "",
          name: "",
        }}
        validationSchema={Yup.object({
          password: Yup.string()
            .min(3, "Password should be of minimum 3 characters length")
            .required("Required"),
          email: Yup.string().email("Enter a valid email").required("Required"),
        })}
        onSubmit={handleSubmit}
      >
        {(formik) => (
          <Container.Form onSubmit={formik.handleSubmit}>
            <Container.Title>Register</Container.Title>

            <Input
              label="Name"
              type="text"
              name="name"
              placeholder="Name"
              {...formik.getFieldProps("name")}
            />
            <Input
              label="Email"
              type="email"
              autoComplete="current-email"
              placeholder="Email"
              {...formik.getFieldProps("email")}
              name="email"
            />
            <ErrorMessage name="email">
              {(msg) => (
                <div style={{ color: "red", fontSize: "12px" }}>
                  Email {msg}
                </div>
              )}
            </ErrorMessage>
            <Input
              label="Password"
              type="password"
              autoComplete="current-password"
              placeholder="Password"
              {...formik.getFieldProps("password")}
              name="password"
            />
            <ErrorMessage name="password">
              {(msg) => (
                <div style={{ color: "red", fontSize: "12px" }}>
                  Password {msg}
                </div>
              )}
            </ErrorMessage>
            <div className="nav-login">
              <NavLink to="/login">LogIn</NavLink>
            </div>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Container.Form>
        )}
      </Formik>
    </Container>
  );
};

export default Register;
