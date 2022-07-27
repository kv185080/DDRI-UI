import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import "../Customer/AddStyle.css";
import { useNavigate } from "react-router-dom";

import {
  Container,
  Col,
  Form,

  FormGroup,
  Label

} from "reactstrap";

import { APIURL } from "../settings/apisettings";

const EditOrders = ({orderID,eta,dt}) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

//const [DeliveredMin,setDeliveredMin]  = useState(null);
  let navigate = useNavigate();



  const updateOrder = (data) => {
    axios.get(APIURL + `/Api/Orders/${orderID}/DeliveredOn/${data.DeliveredMins}`).then(response => {
      alert("Data Updated Successfully");
        navigate("/AdminDashboard");
    
    });
    navigate("/AdminDashboard");
  };

  const onSubmit = (data) => {
    console.log("Butom cliceked", data);
    updateOrder(data);
  };

  

  return (
    <Container className="App">
      <h4 className="PageHeading">Update Order Information</h4>
      <Form className="form" onSubmit={handleSubmit(onSubmit)}>
        <FormGroup row>
          <Col>
            <FormGroup row>
            <Col sm={4}></Col>
              <Label for="OrderID" sm={2}>
              Order ID
              </Label>
              <Col sm={2}>
                <input
                  type="label"
                  name="OrderID"
                  id="OrderID"
                  defaultValue={orderID}
                  readOnly
                />
              </Col>
            </FormGroup>
            <FormGroup row>
            <Col sm={4}></Col>
              <Label for="ETAMins" sm={2}>
              ETA in Mins
              </Label>
              <Col sm={2}>
                <input
                  type="label"
                  name=""
                  id="ETAMins"
                  defaultValue={eta}
                  readOnly
                />
              </Col>
            </FormGroup>
            <FormGroup row>
            <Col sm={4}></Col>
              <Label for="DeliveredMins" sm={2}>
              Arrived in Mins
              </Label>
              <Col sm={2}>
                <input
                  type="text"
                  name="DeliveredMins"
                  {...register("DeliveredMins")}
                  placeholder="Delivered Mins"
                />
              </Col>
            </FormGroup>
            <FormGroup row>
            <Col sm={6}></Col>
            <Col sm={1}>
            <button type="submit" className="btn btn-success">
              Save
            </button>
          </Col>
          {/* <Col sm={1}>
          <button className="btn btn-primary"
            color="danger"
            type="button"
            onClick={() => {
              navigate("/CustomerList");
            }}
          >
            Cancel
          </button>{" "}
        </Col> */}
           </FormGroup>
           </Col>
        </FormGroup>
         
       
     
      </Form>
    </Container>
  );
};
export default EditOrders;
