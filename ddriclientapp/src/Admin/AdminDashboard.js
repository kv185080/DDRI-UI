import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
//import ReactDOM from "react-dom";
import { useNavigate } from "react-router-dom";
import EditOrders from "./EditOrders";


function AdminDashboard({user}) {
  const [Orders, setOrders] = useState([]);
  const [Order, setOrder] = useState({});
  let navigate = useNavigate();
  console.log(user)
  useEffect(() => {
    console.log(user);
    axios.get(`http://localhost:2016/api/Orders`)
            .then(response => {
                setOrders(response.data);
                console.log(response.data);

            })
            .catch(function (error) {
                console.log(error);
            })
  }, [Orders,Order]);

  const tabRow=()=>{  
    return Orders.map(function(order, i){ 
        //console.log('orderitem',order) ;
        return(
          <tr>  
          <td>  
            {order.ID}  
          </td>  
          <td>  
            {order.ETAMin}  
          </td>  
          <td>  
            {order.DeliveredMins===null?'Not Delivered':order.DeliveredMins}  
          </td>  
          <td>
          <button type="submit" disabled={order.IsDelivered} onClick={()=>{setOrder(order)}} id={order.ID}>Update Order</button>
          </td>
          </tr>) 
    });  
  }  

  return (
    <div>
    <div>  
          <h4 align="center">Customers Order List</h4>  
          <table className="table table-striped" style={{ marginTop: 10 }}>  
            <thead>  
              <tr>  
                <th>Order ID</th>  
                <th>Estimated Time of Arrival (in min)</th>  
                <th>Delivered time (in min)</th>  
                <th>Action</th>   
              </tr>  
            </thead>  
            <tbody>  
            { tabRow() }   
            </tbody>  
          </table>  
        </div>  
        <br/>
        <div>
            <EditOrders orderID={Order.ID} eta={Order.ETAMin} dt={Order.DeliveredMins}></EditOrders>
        </div>
        </div>

  );
};

export default AdminDashboard;


