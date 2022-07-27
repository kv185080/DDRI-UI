import React, { useState, useEffect, useContext } from "react";
import { NavigationContext } from "../Context/NavigationContext";

const Dashboard = () => {
  const { user, setIsLoggedIn } = useContext(NavigationContext);

  useEffect(() => {
    setIsLoggedIn(true);
  }, [user]);
  return (
    <>
      <div class="col-sm-12 btn btn-primary">Dashboard</div>
      <h1>Welcome : {user.Email}</h1>
    </>
  );
};

export default Dashboard;
