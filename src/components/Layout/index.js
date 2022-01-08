import React from "react";
import Header from "../Header";
import PropTypes from "prop-types";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.any.isRequired,
};


export default Layout;
