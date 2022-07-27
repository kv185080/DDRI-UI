import React from 'react';
import axios from 'axios';
import '../Customer/AddStyle.css';
//import { useNavigate } from "react-router-dom";
// import Customerlist from "../Customer/List";
// import RedirectTo from 'react-router-dom';




import { Container, Col, Form, Row, FormGroup, Label, Input, Button } from 'reactstrap';
class Register extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            FirstName: '',
            LastName: '',
            State: '',
            City: '',
            Email:'',
            Password:'',
            Phone:'',
            RewardPoints: ''
        }
    }
    AddCustomer = () => {
        axios.post('http://localhost:2016/api/Customer/addorUpdate/', {
            FirstName: this.state.FirstName, LastName: this.state.LastName, State: this.state.State, City: this.state.City, Email:this.state.Email,Password:this.state.Password,
            RewardPoints: 0,Phone:this.state.Phone
        })
            .then(json => {
                console.log(json);
                if (json.status === 200) {
                    alert("Data Save Successfully");
                    window.location.href = '/CustomerList'
                    
                }
                else {
                    alert('Data not Saved');
                }
            })
    }
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        return (
            <Container className="App">
                <h4 className="PageHeading">Create New Customer</h4>
                <br />
                <Form className="form">
                    <Col>
                        <FormGroup row>
                            <Col sm={2}></Col>
                            <Label for="FirstName" sm={3} style={{ textAlign: 'right' }}>First Name</Label>
                            <Col sm={3}>
                                <Input type="text" name="FirstName" onChange={this.handleChange} value={this.state.FirstName} placeholder="First Name" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col sm={2}></Col>
                            <Label for="LastName" sm={3} style={{ textAlign: 'right' }}>Last Name</Label>
                            <Col sm={3}>
                                <Input type="text" name="LastName" onChange={this.handleChange} value={this.state.LastName} placeholder="Last Name" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col sm={2}></Col>
                            <Label for="Phone" sm={3} style={{ textAlign: 'right' }}>Phone</Label>
                            <Col sm={3}>
                                <Input type="text" name="Phone" onChange={this.handleChange} value={this.state.Phone} placeholder="Phone" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col sm={2}></Col>
                            <Label for="State" sm={3} style={{ textAlign: 'right' }}>State</Label>
                            <Col sm={3}>
                                <Input type="text" name="State" onChange={this.handleChange} value={this.state.State} placeholder="State" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col sm={2}></Col>
                            <Label for="City" sm={3} style={{ textAlign: 'right' }}>City</Label>
                            <Col sm={3}>
                                <Input type="text" name="City" onChange={this.handleChange} value={this.state.City} placeholder="City" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col sm={2}></Col>
                            <Label for="Email" sm={3} style={{ textAlign: 'right' }}>Email</Label>
                            <Col sm={3}>
                                <Input type="text" name="Email" onChange={this.handleChange} value={this.state.Email} placeholder="Email" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col sm={2}></Col>
                            <Label for="Password" sm={3} style={{ textAlign: 'right' }}>Password</Label>
                            <Col sm={3}>
                                <Input type="text" name="Password" onChange={this.handleChange} value={this.state.Password} placeholder="Password" />
                            </Col>
                        </FormGroup>
                    </Col>
                    <Col>
                        <br/>
                        <FormGroup row>
                            <Col sm={5}>
                            </Col>
                            <Col sm={1}>
                                <button type="button" onClick={this.AddCustomer} className="btn btn-success">Submit</button>
                            </Col>
                            <Col sm={1}>
                                <Button color="danger">Cancel</Button>{' '}
                            </Col>
                            <Col sm={5}>
                            </Col>
                        </FormGroup>
                    </Col>
                </Form>
            </Container>
        );
    }

}
export default Register;  