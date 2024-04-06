import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Header = () => {
  return (
    <div>
      <nav>
        <h1>Cost Care</h1>
        <main>
          <HashLink to={"/#Home"}>Home</HashLink>
          <HashLink to={"/#About"}>About</HashLink>
          <Link to={"/Contact"}>database</Link>
          <Link to={"/Services"}>Services</Link>
        </main>
      </nav>
      <hr />
    </div>
  );
};

export default Header;
