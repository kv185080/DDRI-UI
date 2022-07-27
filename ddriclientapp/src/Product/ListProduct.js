import axios from "axios";
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import "../Product/style.css";

function ListProduct() {
  // State with list of all checked item
  const [checked, setChecked] = useState([]);
  const [products, setProducts] = useState([]);
  const checkList = ["Apple", "Banana", "Tea", "Coffee"];

  // Add/Remove checked item from list
  useEffect(() => {
    axios.get('http://localhost:2016/api/Product/details')
            .then(response => {
                setProducts(response.data);

            })
            .catch(function (error) {
                console.log(error);
            })
  }, [products]);

//   const handleCheck = (event) => {
//     var updatedList = [...checked];
//     if (event.target.checked) {
//         let selectedItem=products.filter(e=>e.Id==event.target.value);
//         console.log(selectedItem);
//       updatedList = [...checked, selectedItem];
//       setChecked(updatedList);
//     } else {
//         let selectedItems=updatedList.filter(e=>e.Id!=event.target.value);
        
//       setChecked(selectedItems);
//     }
//   };

const handleCheck = (event) => {
    var updatedList = [...checked];
    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(updatedList);
  };


  // Return classes based on whether item is checked
  var isChecked = (item) =>
    checked.includes(item) ? "checked-item" : "not-checked-item";

  return (
    <div className="app">
      <div className="checkList">
        <div className="title">Your CheckList:</div>
        <div className="list-container">
          {products!==null && products.length>0 &&
          products.map((item, index) => (
            <div key={item.Id}>
              <input value={item.Id} type="checkbox" onChange={handleCheck} />
              <span className={isChecked(item.Id)}>{item.Name}</span>
            </div>
            
          ))}
        </div>
      </div>

<br/>
<br/>
      <div>
        {`Total Items added: ${checked.length}`}
      </div>
      <br/>
      <div>
        {`ETA: ${checked.length*5} Minutes`}

      </div>
      <br/>
      <div>
      <button type="submit" className="btn btn-success btn-lg float-right" >  Checkout  </button>
      </div>
    </div>


  );
};

export default ListProduct;


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