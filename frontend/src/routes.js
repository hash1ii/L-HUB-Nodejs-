/**
=========================================================
* Soft UI Dashboard React - v4.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

/** 
  All of the routes for the Soft UI Dashboard React are added here,
  You can add a new route, customize the routes and delete the routes here.

  Once you add a new route on this file it will be visible automatically on
  the Sidenav.

  For adding a new route you can follow the existing routes in the routes array.
  1. The `type` key with the `collapse` value is used for a route.
  2. The `type` key with the `title` value is used for a title inside the Sidenav. 
  3. The `type` key with the `divider` value is used for a divider between Sidenav items.
  4. The `name` key is used for the name of the route on the Sidenav.
  5. The `key` key is used for the key of the route (It will help you with the key prop inside a loop).
  6. The `icon` key is used for the icon of the route on the Sidenav, you have to add a node.
  7. The `collapse` key is used for making a collapsible item on the Sidenav that has other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  8. The `route` key is used to store the route location which is used for the react router.
  9. The `href` key is used to store the external links location.
  10. The `title` key is only for the item with the type of `title` and its used for the title text on the Sidenav.
  10. The `component` key is used to store the component of its route.
*/

// Soft UI Dashboard React layouts
import Dashboard from "layouts/dashboard";
import Tables from "layouts/tables";
import Billing from "layouts/billing";
import VirtualReality from "layouts/virtual-reality";
import RTL from "layouts/rtl";
import Profile from "layouts/profile";
import SignIn from "layouts/authentication/sign-in";
import SignUp from "layouts/authentication/sign-up";
import Admin from "layouts/admin";
// Soft UI Dashboard React icons
import Shop from "examples/Icons/Shop";
import Office from "examples/Icons/Office";
import Settings from "examples/Icons/Settings";
import Document from "examples/Icons/Document";
import SpaceShip from "examples/Icons/SpaceShip";
import CustomerSupport from "examples/Icons/CustomerSupport";
import CreditCard from "examples/Icons/CreditCard";
import Cube from "examples/Icons/Cube";
import { Icon } from "@mui/material";
import AddAdmin from "layouts/admin/addadmin";
import AddAdmin2 from "layouts/admin/addadmin2";
import Subject from "layouts/subject/index";
import AddSubject from "layouts/subject/addsubject";
import AddTopic from "layouts/topic/addtopic";
import AddContent from "layouts/topic/viewtopic/addcontent";
import Topic from "layouts/topic";
import ViewTopic from "layouts/topic/viewtopic";
import ViewContent from "layouts/topic/viewtopic/viewcontent";
import Teacher from "layouts/teacher";
import AddTeacher from "layouts/teacher/addteacher";
import ViewTeacher from "layouts/teacher/viewteacher";
import Tutorial from "user/tutorial";
import Home from "user/home";
import Testimonials from "user/testimonials";
import Blog from "user/blog";
import About from "user/about";
import Contact from "user/contact";
import TutorialSingle from "user/tutorialsingle";
import Single from "user/single";

const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    route: "/dashboard",
    icon: <Shop size="12px" />,
    component: <Dashboard />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Admin Management",
    key: "admin",
    route: "/admin",
    icon: <Icon size="12px">
      <span className="material-symbols-outlined">
        person_2
      </span>
    </Icon>,
    component: <Admin />,
    noCollapse: true,
  },
  {
    // type: "divider",
    name: "Admin Management",
    key: "addadmin",
    route: "/addadmin",
    component: <AddAdmin />,
    noCollapse: true,
  },
  {
    // type: "divider",
    name: "Admin Management",
    key: "editadmin",
    route: "/editadmin/:id",
    component: <AddAdmin />,
    noCollapse: true,
  },
 
  {
    // type: "divider",
    name: "Admin Management",
    key: "addadmin2",
    route: "/admin/addadmin2/:id",
    component: <AddAdmin2 />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Subject",
    key: "subject",
    route: "/subject",
    icon: <Icon size="12px">
    <span className="material-symbols-outlined">
    Subject
    </span>
  </Icon>,
    component: <Subject />,
    noCollapse: true,
  },
  {
    // type: "divider",
    name: "Subject",
    key: "addsubject",
    route: "/addsubject",
    component: <AddSubject />,
    noCollapse: true,
  },
  {
    // type: "divider",
    name: "Subject",
    key: "addsubject",
    route: "/editsubject/:id",
    component: <AddSubject />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Topic",
    key: "topic",
    route: "/topic",
    icon: <Icon size="12px">
    <span className="material-symbols-outlined">
    Topic
    </span>
  </Icon>,
    component: <Topic />,
    noCollapse: true,
  },
  {
    // type: "divider",
    name: "Topic",
    key: "addtopic",
    route: "/addtopic",
    component: <AddTopic />,
    noCollapse: true,
  },
  {
    // type: "divider",
    name: "Topic",
    key: "addtopic",
    route: "/edittopic/:id",
    component: <AddTopic />,
    noCollapse: true,
  },
  {
    // type: "divider",
    name: "Topic",
    key: "viewtopic",
    route: "/viewtopic/:id",
    component: <ViewTopic />,
    noCollapse: true,
  },
 {
    // type: "divider",
    name: "Content",
    key: "addcontent",
    route: "/addcontent/:id",
    component: <AddContent />,
    noCollapse: true, 
  },
  
 {
    // type: "divider",
    name: "Content",
    key: "addcontent",
    route: "/editcontent/:id/:id",
    component: <AddContent />,
    noCollapse: true, 
  },
 {
    // type: "divider",
    name: "Content",
    key: "viewcontent",
    route: "/viewcontent/:id/:id",
    component: <ViewContent />,
    noCollapse: true, 
  },
  
  // {
  //   type: "collapse",
  //   name: "Tables",
  //   key: "tables",
  //   route: "/tables",
  //   icon: <Office size="12px" />,
  //   component: <Tables />,
  //   noCollapse: true,
  // },


  {
    type: "collapse",
    name: "Teacher",
    key: "teacher",
    route: "/teacher",
    icon: <Icon size="12px">
    <span className="material-symbols-outlined">
    Teacher
    </span>
  </Icon>,
    component: <Teacher />,
    noCollapse: true,
  },
  {
    // type: "divider",
    name: "Teacher",
    key: "addteacher",
    route: "/addteacher",
    component: <AddTeacher />,
    noCollapse: true,
  },
  {
    // type: "divider",
    name: "Teacher",
    key: "addteacher",
    route: "/editteacher/:id",
    component: <AddTeacher />,
    noCollapse: true,
  },
  {
    // type: "divider",
    name: "Teacher",
    key: "viewteacher",
    route: "/viewteacher/:id",
    component: <ViewTeacher />,
    noCollapse: true,
  },
  {
    // type: "divider",
    name: "Home",
    key: "home",
    route: "/home",
    component: <Home />,
    noCollapse: true,
  },
  {
    // type: "divider",
    name:"Tutorial",
    key: "tutorial",
    route: "/tutorial",
    component: <Tutorial/>,
    noCollapse: true,
  },
  {
    // type: "divider",
    name:"Testimonials",
    key: "testimonials",
    route: "/testimonials",
    component: <Testimonials/>,
    noCollapse: true,
  },
  {
    // type: "divider",
    name:"Blog",
    key: "blog",
    route: "/blog",
    component: <Blog/>,
    noCollapse: true,
  },
  {
    // type: "divider",
    name:"About",
    key: "about",
    route: "/about",
    component: <About/>,
    noCollapse: true,
  },
  {
    // type: "divider",
    name:"Contact",
    key: "contact",
    route: "/contact",
    component: <Contact/>,
    noCollapse: true,
  },
  {
    // type: "divider",
    name:"TutorialSingle",
    key: "tutorialsingle",
    route: "/tutorialsingle",
    component: <TutorialSingle/>,
    noCollapse: true,
  },
  {
    // type: "divider",
    name:"Single",
    key: "single",
    route: "/single",
    component: <Single/>,
    noCollapse: true,
  },
  // {
  //   type: "collapse",
  //   name: "Billing",
  //   key: "billing",
  //   route: "/billing",
  //   icon: <CreditCard size="12px" />,
  //   component: <Billing />,
  //   noCollapse: true,
  // },
  // {
  //   type: "collapse",
  //   name: "Virtual Reality",
  //   key: "virtual-reality",
  //   route: "/virtual-reality",
  //   icon: <Cube size="12px" />,
  //   component: <VirtualReality />,
  //   noCollapse: true,
  // },
  // {
  //   type: "collapse",
  //   name: "RTL",
  //   key: "rtl",
  //   route: "/rtl",
  //   icon: <Settings size="12px" />,
  //   component: <RTL />,
  //   noCollapse: true,
  // },
  { type: "title", title: "Account Pages", key: "account-pages" },
  {
    type: "collapse",
    name: "Profile",
    key: "profile",
    route: "/profile",
    icon: <CustomerSupport size="12px" />,
    component: <Profile />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Sign In",
    key: "sign-in",
    route: "/authentication/sign-in",
    icon: <Document size="12px" />,
    component: <SignIn />,
    noCollapse: true,
  },
  // {
  //   type: "collapse",
  //   name: "Sign Up",
  //   key: "sign-up",
  //   route: "/authentication/sign-up",
  //   icon: <SpaceShip size="12px" />,
  //   component: <SignUp />,
  //   noCollapse: true,
  // },
];

export default routes;
