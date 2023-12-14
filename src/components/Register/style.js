import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f3f4f6;
  input {
    margin-top: 20px;
    height: 40px;
  }
  .nav-login {
    text-align: end;
    color: #6e3ba7;
    margin-top: 15px;
    a {
      color: inherit;
    }
  }
`;

Container.Title = styled.h2`
  font-weight: 700;
  color: #111827;
  font-size: 24px;
`;

Container.Text = styled.p`
  color: #9ca3af;
  font-size: 14px;
  font-weight: 500;
  margin-top: 10px;
`;

Container.Form = styled.form`
  display: block;
  width: 600px;
  height: fit-content;
  padding: 40px;
  background: #fff;
  margin: 50px auto;
  border-radius: 16px;
  max-width: 100%;
  box-sizing: border-box;
  box-shadow: 0px 2px 4px rgb(0 0 0 / 6%), 0px 4px 6px rgb(0 0 0 / 10%);
`;
