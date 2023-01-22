import './App.css';
import { Global } from './Style/global';
import RouteMain from './Routers';
import AuthProviderDashboard from './Providers/authContextDashboard';
import React from 'react';

function App() {
  return (
    <>
      <AuthProviderDashboard>
        <Global />
        <RouteMain />
      </AuthProviderDashboard>
    </>
  );
}

export default App;
