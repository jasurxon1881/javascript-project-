import { Container } from "../Register/style";
import { NavLink, useNavigate } from "react-router-dom";
import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Button, Input, message } from "antd";
import useRequest from "../../hooks/useRequest";
import { useContext } from "react";
import { AuthContext } from "../../context/Auth";

const Login = () => {
  const [, dispatch] = useContext(AuthContext);

  const navigate = useNavigate();
  const { request } = useRequest();

  const handleSubmit = async (values) => {
    request({
      url: "user/login",
      method: "post",
      body: values,
      includeToken: false,
    }).then((res) => {
      if (res?.token) {
        message.success("Successfully Login In!");

        dispatch({ type: "register", payload: res?.token });
        navigate("/");
      } else {
        message.error(res);
      }
    });
  };
  return (
    <Container>
      <Formik
        initialValues={{
          email: "",
          password: "",
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
            <Container.Title>Log In</Container.Title>
            <Container.Text>
              Welcome Back. Login to continue your learning.
            </Container.Text>
            <Input
              label="Email"
              type="email"
              autoComplete="current-email"
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
              <NavLink to="/register">Register</NavLink>
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

export default Login;
