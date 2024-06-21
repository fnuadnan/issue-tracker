import { Auth0Provider } from "@auth0/auth0-react";
import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import router from "./routes";

// Create a client
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
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
      </QueryClientProvider>
    </HelmetProvider>
  </React.StrictMode>
);
