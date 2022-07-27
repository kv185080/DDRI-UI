import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import{Row,Col} from "reactstrap";

import "../Product/style.css";

function ListProduct({userId}) {
  // State with list of all checked item
  const [checked, setChecked] = useState([]);
  const [products, setProducts] = useState([]);
  let navigate = useNavigate();

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
const placeOrder =()=>{
  var data={'DeliveryMins':checked.length*5,'Products':[]};
  debugger;
  checked.map(p=>{
    //console.log(p);
    var item = {'ProductId':p,'Price':10,'Quantity':1};
    data.Products.push(item);
  })
  axios.post(`http://localhost:2016/api/Orders/Customer/${userId}/Create`,data)
            .then(response => {
                console.log(response.data);
                setChecked([]);
                alert("Order Created Successfully");
            })
            .catch(function (error) {
                console.log(error);
            })
}

  // Return classes based on whether item is checked
  var isChecked = (item) =>
    checked.includes(item) ? "checked-item" : "not-checked-item";

  return (
    <div className="app">
      <div className="checkList">
        <div className="title">Your CheckList:</div>
        <div className="list-container">
        <Row>
          {products!==null && products.length>0 &&
          products.map((item, index) => (
            <Col sm={3}>
            <div key={item.ID} style={{height:'75px'}}>
              <input value={item.ID} type="checkbox" onChange={handleCheck} />
              <span className={isChecked(item.ID)}>{item.Name}</span>
            </div>
            </Col>
          ))}
          </Row>
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
      <button type="submit" className="btn btn-success btn-lg float-right" onClick={placeOrder} disabled={checked.length===0}>  Place Order  </button>
      &nbsp; &nbsp;
      <button type="submit" className="btn btn-success btn-lg float-right" onClick={()=>{navigate('/OrderList')}}>  View Orders  </button>
      </div>
    </div>


  );
};

export default ListProduct;


