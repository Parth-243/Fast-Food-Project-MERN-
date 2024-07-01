import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./component/Layout/Layout";
import NavScrollExample from "./component/Pages/Home/NavScrollExample";
import Abouts from "./component/Pages/AboutUs/Abouts";
import ContactUs from "./component/Pages/ContactUs/ContactUs";
import SignUpForm from "./component/Pages/SignupPages/SignUpForm";
import BusinessSignup from "./component/Pages/SignupPages/BusniessSignup";
import LandingPages from "./component/Pages/LandingPage/LandingPages";
import UserLogin from "./component/Pages/Login/UserLogin/UserLogin";
import Login from "./component/Pages/Login/BusinessLogin/Login";
import AdminLogin from "./component/Pages/Login/AdminLogin/AdminLogin";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/home" element={<NavScrollExample />} />
            <Route path="/aboutus" element={<Abouts />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/signup" element={<SignUpForm />} />
            <Route path="/businessSignIn" element={<BusinessSignup />} />
            <Route path="/" element={<LandingPages />} />
            <Route path="/login" element={<UserLogin />} />
            <Route path="/businessLogin" element={<Login />} />
            <Route path="/adminLogin" element={<AdminLogin />} />

            <Route />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
