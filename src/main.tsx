import { Auth0Provider } from "@auth0/auth0-react";
import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import router from "./routes";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Theme accentColor="violet">
      <Auth0Provider
        domain="dev-pdktww1v14zos1yp.us.auth0.com"
        clientId="HtxzVlMSqYAj4scB2t9fCUIZtVYoPSaz"
        authorizationParams={{
          redirect_uri: window.location.origin,
        }}
      >
        <RouterProvider router={router} />
      </Auth0Provider>
    </Theme>
  </React.StrictMode>
);
