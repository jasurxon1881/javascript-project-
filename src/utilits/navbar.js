import About from "../components/About";
import Contact from "../components/Contact";
import Courses from "../components/Courses";
import Home from "../components/Home";

export const data = [
  {
    id: 1,
    title: "Home",
    path: "/",
    Component: Home,
  },
  {
    id: 2,
    title: "About",
    path: "/about",
    Component: About,
  },
  {
    id: 3,
    title: "Our Courses",
    path: "/our-courses",
    Component: Courses,
  },
  {
    id: 5,
    title: "Contact",
    path: "/contact",
    Component: Contact,
  },
];
