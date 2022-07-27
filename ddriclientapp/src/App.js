import React, { useContext, useEffect, useState } from "react";
import Customerlist from "./Customer/List";
import EditCustomer from "./Customer/Edit";
import LoginPage from "./Login/login";
import Regster from "./Login/register";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Dashboard from "./Login/dashboard";
import NavigationContextProvider, {
  NavigationContext,
} from "./Context/NavigationContext";
import Layout from "./Shared/Layout";

const App = () => {
  return (
    <NavigationContextProvider>
      <BrowserRouter basename="/">
        <Layout></Layout>
      </BrowserRouter>
    </NavigationContextProvider>
  );
};

export default App;
