// Import Components
import Generic from "../components/Generic";
import Overview from "../components/Dashboard/Overview";
import ChangePassword from "../components/Dashboard/ChangePassword";

// Import Icons
import { ReactComponent as User } from "../assets/icon/user.svg";
import { ReactComponent as Book } from "../assets/icon/book.svg";
import { ReactComponent as Pay } from "../assets/icon/pay.svg";
import { ReactComponent as Lock } from "../assets/icon/lock.svg";
import Courses from "../components/Dashboard/Courses";
export const sidebar = [
  {
    id: 1,
    title: "Account Overview",
    Icon: User,
    path: "overview",
    Component: Overview,
  },
  {
    id: 2,
    title: "Courses",
    Icon: Book,
    path: "courses",
    Component: Courses,
  },
  {
    id: 3,
    title: "Payment",
    Icon: Pay,
    path: "payment",
    Component: Generic,
  },

  {
    id: 5,
    title: "Change Password",
    Icon: Lock,
    path: "change-password",
    Component: ChangePassword,
  },
];
