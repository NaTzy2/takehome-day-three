import React from "react";

import { NavLink } from "react-router-dom";

const Navbar = () => {
  const styleActive = {
    textDecoration: "none",
    backgroundColor: "#000",
    color: "#E50914",
    fontSize: "20px",
  };

  const styleInActive = {
    textDecoration: "none",
    backgroundColor: "#000",
    color: "white",
    fontSize: "20px",
  };

  return (
    <nav
      style={{
        backgroundColor: "#000",
        padding: "10px",
        display: "flex",
        gap: "20px",
      }}
    >
      <NavLink
        to="/"
        style={({ isActive }) => (isActive ? styleActive : styleInActive)}
      >
        Posts
      </NavLink>

      <NavLink
        to="/users"
        style={({ isActive }) => (isActive ? styleActive : styleInActive)}
      >
        Users
      </NavLink>
    </nav>
  );
};

export default Navbar;
