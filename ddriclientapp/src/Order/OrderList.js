import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import ReactDOM from "react-dom";
import { useNavigate } from "react-router-dom";


function OrderList({user}) {
  const [Orders, setOrders] = useState([]);
  let navigate = useNavigate();
  
  console.log(user)
  useEffect(() => {
    console.log(user);
    axios.get(`http://localhost:2016/api/Orders/Customer/${user.Id}`)
            .then(response => {
                setOrders(response.data);
                console.log(response.data);

            })
            .catch(function (error) {
                console.log(error);
            })
  }, [Orders]);

  const tabRow=()=>{  
    return Orders.map(function(order, i){ 
        console.log('orderitem',order) ;
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
          </tr>) 
    });  
  }  

  return (
    <div>  
          <h4 align="center">Customer Order List</h4>  
          <table className="table table-striped" style={{ marginTop: 10 }}>  
            <thead>  
              <tr>  
                <th>OrderID</th>  
                <th>Estimated Time of Arrival in Mins</th>  
                <th>Delivered time in Mins</th>   
              </tr>  
            </thead>  
            <tbody>  
             { tabRow() }   
            </tbody>  
          </table>  
          <button type="submit" className="btn btn-success btn-lg float-right" onClick={()=>{navigate('/Dashboard')}}>  Back to Dashboard  </button>
        </div>  

  );
};

export default OrderList;


