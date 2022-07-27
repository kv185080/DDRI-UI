import axios from 'axios';
import React, { useState, createContext, FC } from 'react';


const NavigationContext = createContext();


function NavigationContextProvider(){
  const [isLoggedIn,setIsLoggedIn] = useState("false");
  const navigationState = {
    isLoggedIn,
    setIsLoggedIn,
  };
  const apiUrl = "http://localhost:2016/api/Customer/login";
  function Login(email,password){
    axios.post(apiUrl, {'Email':email,'Password':password})    
            .then((result) => {    
                debugger;  
                console.log(result.data);   
                const serializedState = JSON.stringify(result.data.Customer);  
               var a= localStorage.setItem('myData', serializedState);   
                console.log("A:",a)  
                const user =result.data.Customer;  
                console.log(result.data.message);  
                if (result.data.status == '200'){  
                   // navigate('/Dashboard') ;
                    localStorage.setItem('user','true');
                }

                else    {
                alert('Invalid User');   
                localStorage.setItem('user','false'); 
                }
            })  

  }

  return (
    <NavigationContext.Provider value={[navigationState,Login]}></NavigationContext.Provider>
  );
};
export { NavigationContext, NavigationContextProvider };
