import React, { useState, useEffect, useContext } from "react";
import { NavigationContext } from "../Context/NavigationContext";
import ListProduct from '../Product/ListProduct'

const Dashboard = () => {
  const { user, setIsLoggedIn } = useContext(NavigationContext);

  useEffect(() => {
    setIsLoggedIn(true);
  }, [user]);
  return (
    <>
      <div class="col-sm-12 btn btn-primary">Dashboard</div>
      <h1>Welcome {user.FirstName}</h1>
      <ListProduct></ListProduct>
      <br></br>
      <button type="submit" className="btn btn-success btn-lg float-right" >  Checkout  </button>
    </>
  );
};

export default Dashboard;
