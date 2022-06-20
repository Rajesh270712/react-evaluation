import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { CartContext } from "../context/CartContext";
import { Navigate } from "react-router-dom";
const Navbar = () => {
  const { isAuth, setAuth } = useContext(AuthContext);

  const {cart} = useContext(CartContext)

  function handleHome() {
    // (setAuth ? <Navigate to={"/home"} /> : null)
  }

  return <div>
    {/* <Link to={"/home"} >Home</Link> */}
    {/* <button onClick={handleHome}> Home</button> */}
    {
      isAuth ? <h3>Count: {cart}</h3> : null
    }
    
    <button>{ !isAuth ? "Login" : "Logout" }</button>
  </div>;
};

export default Navbar;
