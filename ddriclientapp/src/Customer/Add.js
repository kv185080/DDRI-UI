import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import "../Customer/AddStyle.css";
import { useNavigate } from "react-router-dom";

import {
  Container,
  Col,
  Form,
  Row,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";
import { APIURL } from "../settings/apisettings";

const Add = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  let navigate = useNavigate();

  const AddCustomer = (data) => {
    axios.post(APIURL + "/Api/Customer/addorUpdate/", data).then((json) => {
      console.log(json);
      if (json.data.Status === "Success") {
        console.log(json.data.Status);
        alert("Data Save Successfully");
      } else {
        alert("Data not Saved");
      }
    });
    navigate("/CustomerList");
  };

  const onSubmit = (data) => {
    console.log("Butom cliceked", data);
    AddCustomer(data);
  };

  return (
    <Container className="App">
      <h4 className="PageHeading">Enter Customer Information</h4>
      <Form className="form" onSubmit={handleSubmit(onSubmit)}>
        <FormGroup row>
          <Col>
            <FormGroup row>
              <Label for="FirstName" sm={2}>
                First Name
              </Label>
              <Col sm={10}>
                <input
                  type="text"
                  name="FirstName"
                  id="FirstName"
                  placeholder="First Name"
                  {...register("FirstName")}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="LastName" sm={2}>
                Last Name
              </Label>
              <Col sm={10}>
                <input
                  type="text"
                  name="LastName"
                  {...register("LastName")}
                  placeholder="Last Name"
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="State" sm={2}>
                State
              </Label>
              <Col sm={10}>
                <input
                  type="text"
                  name="State"
                  {...register("State")}
                  placeholder="State"
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="City" sm={2}>
                City
              </Label>
              <Col sm={10}>
                <input
                  type="text"
                  name="City"
                  {...register("City")}
                  placeholder="City"
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="RewardPoints" sm={2}>
                RewardPoints
              </Label>
              <Col sm={10}>
                <input
                  type="text"
                  name="RewardPoints"
                  {...register("RewardPoints")}
                  placeholder="Reward Points"
                />
              </Col>
            </FormGroup>
          </Col>
          <Col sm={5}></Col>
          <Col sm={1}>
            <button type="submit" className="btn btn-success">
              Submit
            </button>
          </Col>

          <Col sm={5}></Col>
        </FormGroup>
        <Col sm={1}>
          <button
            color="danger"
            type="button"
            onClick={() => {
              navigate("/CustomerList");
            }}
          >
            Cancel
          </button>{" "}
        </Col>
      </Form>
    </Container>
  );
};
export default Add;
