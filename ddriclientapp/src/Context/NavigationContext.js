import axios from "axios";
import React, { useState, createContext, FC, Children } from "react";

export const NavigationContext = createContext();

const NavigationContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState("false");
  const [user, setUser] = useState(null);

  const apiUrl = "http://localhost:2016/api/Customer/login";

  const Login = (email, password) => {
    axios.post(apiUrl, { Email: email, Password: password }).then((result) => {
      if (result.status == "200") {
        setIsLoggedIn(true);
        setUser(result.data.Customer);
        console.log("result", result);
        return true;
      } else {
        alert("Invalid User");
        return false;
      }
    });
  };

  return (
    <NavigationContext.Provider
      value={{ Login, user, isLoggedIn, setIsLoggedIn }}
    >
      {props.children}
    </NavigationContext.Provider>
  );
};
export default NavigationContextProvider;
