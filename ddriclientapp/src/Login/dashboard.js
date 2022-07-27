import React, { useState, useEffect,useContext } from 'react'  
import { NavigationContext } from '../../src/NavigationContext';
  
function Dashboard() {  
    const [user, setuser] = useState({ Email: '', Password: '',Id:'' });  
    const {navigationState} = useContext(NavigationContext);
    useEffect(() => {  
        var a = localStorage.getItem('myData');  
        var b = JSON.parse(a);  
        console.log(b.Email);  
        setuser(b)  
        console.log(user.Email)  
        debugger;
        localStorage.setItem('user','true');
        navigationState.setIsLoggedIn('true');
  
    }, []);  
    return (  
        <>  
            <div class="col-sm-12 btn btn-primary">  
                Dashboard  
        </div>  
            <h1>Welcome :{user.Email}</h1>  
        </>  
    )  
}  
  
export default Dashboard