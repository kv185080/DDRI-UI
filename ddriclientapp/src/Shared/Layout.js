import React, { useContext, useEffect, useState } from "react";
import Customerlist from "../Customer/List";
import EditCustomer from "../Customer/Edit";
import LoginPage from "../Login/login";
import Regster from "../Login/register";
import ProductList from '../Product/ListProduct' ;
import AdminDashboard from "../Admin/AdminDashboard";
import EditOrders from "../Admin/EditOrders";
import OrderList from '../Order/OrderList';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "../App.css";
import Dashboard from "../Login/dashboard";
import { NavigationContext } from "../Context/NavigationContext";

const Layout = (props) => {
  const { isLoggedIn, setIsLoggedIn, user } = useContext(NavigationContext);
  useEffect(() => {}, [isLoggedIn]);

  const logoutClick = () => {
    setIsLoggedIn(false);
  };

  return (
    <>
      <div className="container text-right">
        <nav className="navbar navbar-expand-lg navheader text-right">
          <div className="collapse navbar-collapse text-right">
            {!isLoggedIn ? (
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link to={"/login"} className="nav-link">
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/Regster"} className="nav-link">
                    Register
                  </Link>
                </li>
              </ul>
            ) : (
              <a
                class="nav-item mr-3 nav-link p-3"
                href="/login"
                onClick={logoutClick}
              >
                Logout
              </a>
            )}
          </div>
        </nav>{" "}
        <br />
        <Routes>
          <Route path="*" element={<LoginPage></LoginPage>} />
          <Route path="/" element={<LoginPage></LoginPage>} />
          <Route path="/login" element={<LoginPage></LoginPage>} />
          <Route path="/Regster" element={<Regster></Regster>} />
          <Route path="/Dashboard" element={<Dashboard></Dashboard>} />
          <Route path="/Edit/:id" element={<EditCustomer></EditCustomer>} />
          <Route path="/CustomerList" element={<Customerlist></Customerlist>} />
          <Route path='/ProductList' element={<ProductList></ProductList>} />
          <Route path='/OrderList' element={<OrderList user={user}></OrderList>} />
          <Route path='/AdminDashboard' element={<AdminDashboard></AdminDashboard>} />
          <Route path='/EditOrders' element={<EditOrders></EditOrders>} />
        </Routes>
      </div>
    </>
  );
};

export default Layout;
