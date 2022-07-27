import React, { Component } from 'react';
const ProductTable = (props) => {

    console.log(props);

    const handleChange = (e) => {
    //     // Destructuring
    //     const { value, checked } = e.target;
    //     const { languages } = userinfo;

    //     console.log(`${value} is ${checked}`);

    //     // Case 1 : The user checks the box
    //     if (checked) {
    //         setUserInfo({
    //             languages: [...languages, value],
    //             response: [...languages, value],
    //         });
    //     }
    //     else {
    //         setUserInfo({
    //             languages: languages.filter((e) => e !== value),
    //             response: languages.filter((e) => e !== value),
    //         });
    //     }
    console.log(e.target.value);

     };


    
        return (
            <tr>
                <td scope="row"> <input type="checkbox" onChange={handleChange} /></td>
                <td>
                    {props.obj.Name}
                </td>
                <td>
                    {props.obj.Price}
                </td>
                <td>
                    {props.obj.AvailableQuantity}
                </td>
            </tr>
        );
   
}


export default ProductTable;  