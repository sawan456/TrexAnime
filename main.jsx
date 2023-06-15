import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx';
import {AppProvider} from './src/context.jsx'
import { Auth0Provider } from "@auth0/auth0-react";


ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain="dev-h5gfoddhjblvjfts.us.auth0.com"
    clientId="CZQxQVRNjxCQEMLbtHQmmsdBzLEN4n3g"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <AppProvider>
    <App/>
    </AppProvider>
    </Auth0Provider>
  ,
)
