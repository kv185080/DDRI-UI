import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import ReactDOM from "react-dom";


function OrderList({user}) {
  const [Orders, setOrders] = useState([]);
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
        </div>  

  );
};

export default OrderList;


// import React, { Component } from 'react';
// import axios from 'axios';
// //import Table from './Table';  
// import ProductTable from './ProductTable'
// import { Card, CardBody, CardTitle, Button, CardGroup } from 'reactstrap';

// export default class list extends Component {

//     constructor(props) {
//         console.log("hi");
//         super(props);
//         this.state = { business: [] };
//     }



//     // handleChange = function (e) {
//     //     debugger;
//     //     if (e.target.checked) {
//     //         this.state.push(e.target.id);
//     //     }
//     // }

//     handleCheckboxChange = (event) => {
//         if (event.target.checked) {
//           if (!this.state.workDays.includes(event.target.value)) {
//             this.setState(prevState => ({ workDays: [...prevState.workDays, event.target.value]}))
//           }
//         } else {
//           this.setState(prevState => ({ workDays: prevState.workDays.filter(day => day !== event.target.value) }));
//         }
//       }

//     componentDidMount() {

//         axios.get('http://localhost:2016/api/Product/details')
//             .then(response => {
//                 this.setState({ business: response.data });

//             })
//             .catch(function (error) {
//                 console.log(error);
//             })
//     }

//     tabRow() {

//         return this.state.business.map(function (product, i) {
//             return <Card key={product.id} style={{
//                 width: '18rem'
//             }}>
//                 <CardBody>
//                     <input type="checkbox" id={product.id}
//                        onChange={this.handleCheckboxChange} ></input>
//                     <CardTitle tag="h5"> {product.Name}</CardTitle>

//                 </CardBody>
//             </Card>;
//         });
//     }


//     render() {
//         return (
//             <CardGroup>
//                 {this.tabRow()}

//                 {/* <h4 align="center">Product List</h4>  
//           <table className="table table-striped" style={{ marginTop: 10 }}>  
//             <thead>  
//               <tr>  
//               <th></th>
//                 <th scope="col">Name</th>  
//                 <th>Price</th>  
//                 <th>AvailableQuantity</th>       
               
//               </tr>  
//             </thead>  
//             <tbody>  
//              { this.tabRow() }   
//             </tbody>  
//           </table>   */}
//             </CardGroup>
//         );
//     }
// }  