import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useAuth0 } from "@auth0/auth0-react";

const Header = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  const { logout } = useAuth0();
  return (
    <div>
      <nav>
        <h1>Cost Care</h1>
        <main>
          <HashLink to={"/#Home"}>Home</HashLink>
          <HashLink to={"/#About"}>About</HashLink>
          <Link to={"/Contact"}>database</Link>
          { isAuthenticated ? 
          (<Link><button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Log Out</button></Link>):
          (<Link><button onClick={() => loginWithRedirect()}>Admin</button></Link>)} 
        </main>
      </nav>
      <hr />
    </div>
  );
};

export default Header;
