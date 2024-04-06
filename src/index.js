import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Auth0Provider
    domain="dev-x8tirwct3sbo07g1.us.auth0.com"
    clientId="yask6J6peCdmFwL05cDhFtk8ZpAbgdNn"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >

    <App />
  </Auth0Provider>
  </React.StrictMode>
);
