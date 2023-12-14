import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
// import Navbar from "../components/Navbar";
import { data } from "../utilits/navbar";
import Course from "../components/Courses/Course";
import Register from "../components/Register";
import Login from "../components/Login";

const Root = () => {
  return (
    <Routes>
      <Route element={<Navbar />}>
        {data?.map(({ path, id, Component }) => (
          <Route key={id} path={path} element={<Component />} />
        ))}
        <Route path="our-courses/:userId" element={<Course />} />
      </Route>
      <Route path="register" element={<Register />} />
      <Route path="login" element={<Login />} />
      <Route path={"*"} element={<div>you are lost</div>} />
    </Routes>
  );
};

export default Root;
