import React, { useState, useEffect } from 'react'   
import loginImage from '../../src/Login-background-img.png';
import axios from 'axios';  
function Login(props) {  
    const [employee, setemployee] = useState({ Email: '', Password: ''});  
    const apiUrl = "http://localhost:2016/api/Customer/Login";    
    const btnLogin = (e) => {    
            e.preventDefault();    
            debugger;   
            const data = { Email:employee.Email, Password: employee.Password };    
            axios.post(apiUrl, data)    
            .then((result) => {    
                debugger;  
                console.log(result.data);   
                const serializedState = JSON.stringify(result.data.UserDetails);  
               var a= localStorage.setItem('myData', serializedState);   
                console.log("A:",a)  
                const user =result.data.UserDetails;  
                console.log(result.data.message);  
                if (result.data.status == '200')    
                    props.history.push('/Dashboard')    
                else    
                alert('Invalid User');    
            })        
          };    
          
          const onChange = (e) => {    
                e.persist();    
                debugger;    
                setemployee({...employee, [e.target.name]: e.target.value});    
              }    
    return (  
        
        <div class="container">  
        <div class="row justify-content-center">  
          <div class="col-xl-10 col-lg-12 col-md-9">  
            <div class="card o-hidden border-0 shadow-lg my-5">  
              <div class="card-body p-0">  
                <div class="row">  
                  <div class="col-lg-6"><div style={{backgroundImage:`url(${loginImage})`}}></div></div>  
                  <div class="col-lg-6">  
                    <div class="p-5">  
                      <div class="text-center">  
                        <h1 class="h4 text-gray-900 mb-4">Welcome Back!</h1>  
                      </div>  
                      <form onSubmit={btnLogin} class="user">  
                        <div class="form-group">  
                          <input type="email" class="form-control" value={employee.Email} onChange={ onChange }  name="Email" id="Email" aria-describedby="emailHelp" placeholder="Enter Email"/>  
                        </div>  
                        <br/>
                        <div class="form-group">  
                          <input type="password" class="form-control" value={employee.Password} onChange={ onChange }  name="Password" id="DepPasswordartment" placeholder="Password"/>  
                        </div>  
                        <br/>
                        {/* <div class="form-group">  
                          <div class="custom-control custom-checkbox small">  
                            <input type="checkbox" class="custom-control-input" id="customCheck"/>  
                            <label class="custom-control-label" for="customCheck">Remember Me</label>  
                          </div>  
                        </div> */}  
                        <button type="submit" className="btn btn-info mb-1" block><span>Login</span></button>    
                      </form>  
                      <hr/>  
                    </div>  
                  </div>  
                </div>  
              </div>  
            </div>  
           </div>  
          </div>  
        </div>  
    )  
}  
  
export default Login