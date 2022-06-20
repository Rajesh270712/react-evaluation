import React, { useState, useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const { isAuth, setAuth } = useContext(AuthContext);

  const [userData, setData] = useState({
    "email": "",
    "password": ""
  });

  const { email, password } = userData;

  function handleChange(e) {
    let {name, value} = e.target;
    setData({...userData,[name]:value})
  }
  
  function handleLogin(e){
    e.preventDefault()
    console.log(userData )
    fetch("https://reqres.in/api/login",{
      method:"POST",
      data: JSON.stringify(userData),
      headers:{
        "Content-type":"Application/json"
      }
    })
    .then((res)=>res.json())
  }

  function handleHome() {
    // (setAuth ? <Navigate to={"/home"} /> : null)
  }
  return (
    <div>
      {
        <>
          

          <form action="">
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
            />
            <button onClick={handleLogin} >Login</button>
          </form>
        </>
      }
    </div>
  );
};

export default Login;
