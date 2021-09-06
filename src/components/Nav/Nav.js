import React from "react";
import "./Nav.scss";

import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <Link className="link-style" to="/">
      <nav className="nav">
        <p className="title">Fruit🍊pia</p>
      </nav>
    </Link>
  );
};

export default Nav;
