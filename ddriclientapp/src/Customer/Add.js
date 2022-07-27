import React from 'react';  
import axios from 'axios';  
import '../Customer/AddStyle.css';  

import { Container, Col, Form, Row, FormGroup, Label, Input, Button } from 'reactstrap';  
class Add extends React.Component{  
constructor(props){  
super(props)  
this.state = {  
  FirstName:'',  
  LastName:'',  
  State:'',  
  City:'' ,
  RewardPoints:'' 
}  
}   
AddCustomer=()=>{  
  axios.post('http://localhost:2016/api/Customer/addorUpdate/', {FirstName:this.state.FirstName,LastName:this.state.LastName,State:this.state.State,City:this.state.City,  
  RewardPoints:this.state.RewardPoints})  
.then(json => {  
if(json.data.Status==='Success'){  
  console.log(json.data.Status);  
  alert("Data Save Successfully");  
this.props.history.push('/CustomerList')  
}  
else{  
alert('Data not Saved');  
debugger;  
this.props.history.push('/CustomerList')  
}  
})  
}  
handleChange= (e)=> {  
this.setState({[e.target.name]:e.target.value});  
}  
   
render() {  
return (  
   <Container className="App">  
    <h4 className="PageHeading">Enter Customer Information</h4>  
    <Form className="form">  
      <Col>  
        <FormGroup row>  
          <Label for="FirstName" sm={2}>First Name</Label>  
          <Col sm={10}>  
            <Input type="text" name="FirstName" onChange={this.handleChange} value={this.state.FirstName} placeholder="First Name" />  
          </Col>  
        </FormGroup>  
        <FormGroup row>  
          <Label for="LastName" sm={2}>Last Name</Label>  
          <Col sm={10}>  
            <Input type="text" name="LastName" onChange={this.handleChange} value={this.state.LastName} placeholder="Last Name" />  
          </Col>  
        </FormGroup>  
        <FormGroup row>  
          <Label for="State" sm={2}>State</Label>  
          <Col sm={10}>  
            <Input type="text" name="State" onChange={this.handleChange} value={this.state.State} placeholder="State" />  
          </Col>  
        </FormGroup>  
        <FormGroup row>  
          <Label for="City" sm={2}>City</Label>  
          <Col sm={10}>  
            <Input type="text" name="City" onChange={this.handleChange} value={this.state.City} placeholder="City" />  
          </Col>  
        </FormGroup>  
        <FormGroup row>  
          <Label for="RewardPoints" sm={2}>RewardPoints</Label>  
          <Col sm={10}>  
            <Input type="text" name="RewardPoints" onChange={this.handleChange} value={this.state.RewardPoints} placeholder="Reward Points" />  
          </Col>  
        </FormGroup>  
      </Col>  
      <Col>  
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
export default Add;  