import React from "react";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light"
      style={{
        position: "fixed",
        top: 0,
        right: 0,
        backgroundColor: "#ADC5B7", 
        zIndex: 1000, 
      }}>
      <a
        className="navbar-brand"
        href="/"
        style={{ backgroundColor: "#ADC5B7", color: "white", padding: "1rem" }} >
        Home
      </a>
      <a
        className="navbar-brand"
        href="/Owner"
        style={{ backgroundColor: "#ADC5B7", color: "white", padding: "1rem" }}>
        Owner
      </a>
    </nav>
  );
};

export default Navbar;
