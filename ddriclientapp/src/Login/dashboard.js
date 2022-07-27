import React, { useState, useEffect, useContext } from "react";
import { NavigationContext } from "../Context/NavigationContext";
import ListProduct from '../Product/ListProduct';
import { useNavigate } from "react-router-dom";
import {
    Col,
    Row,
  } from "reactstrap";


const Dashboard = () => {
    const { user, setIsLoggedIn } = useContext(NavigationContext);
    console.log('dashboard',user);
    let navigate = useNavigate();

    useEffect(() => {
        setIsLoggedIn(true);
        if (user === null) {
            navigate("/login");
        }
    }, [user]);
    return (
        <>
            <div class="col-sm-12 btn btn-primary">Dashboard</div>
            <Row>
                <Col sm={6}><h1>Welcome {user.FirstName}</h1></Col>
                <Col sm={3}></Col>
                <Col sm={3}><h4>Reward Points: {user.RewardPoints}</h4></Col>
            </Row>

            <ListProduct userId={user.Id}></ListProduct>
        </>
    );
};

export default Dashboard;
