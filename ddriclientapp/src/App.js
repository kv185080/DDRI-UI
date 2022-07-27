import React from 'react';
import AddCustomer from './Customer/Add';
import Customerlist from './Customer/List';
import EditCustomer from './Customer/Edit';
import LoginPage from "./Login/login";
import Regster from "./Login/register";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <nav className="navbar navbar-expand-lg navheader">
          <div className="collapse navbar-collapse" >
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to={'/login'} className="nav-link">Login</Link>
              </li>
              <li className="nav-item">
                <Link to={'/Regster'} className="nav-link">Register</Link>
              </li>
              <li className="nav-item">
                <Link to={'/AddCustomer'} className="nav-link">AddCustomer</Link>
              </li>
              <li className="nav-item">
                <Link to={'/CustomerList'} className="nav-link">Customer List</Link>
              </li>
            </ul>
          </div>
        </nav> <br />
        <Routes>
          <Route path='/login' element={<LoginPage></LoginPage>} />
          <Route exact path='/AddCustomer' element={<AddCustomer></AddCustomer>} />
          <Route path='/Edit/:id' element={<EditCustomer></EditCustomer>} />
          <Route path='/CustomerList' element={<Customerlist></Customerlist>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;  
