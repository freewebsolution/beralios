import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
