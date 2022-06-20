import "./App.css";
import Login from "./pages/Login";
import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { Route,Routes } from "react-router-dom";


function App() {
  return <div className="App">{
    <AuthProvider>
      <CartProvider>

    <Navbar/>
    {/* <Login/> */}
    <Home/>
    {/* <Routes>
      <Route path="/" element={<Login/>} >  </Route> 
      <Route path="/home" element={<Home/>} > </Route>
    </Routes> */}
      </CartProvider>
    </AuthProvider>
  }</div>;
}

export default App;
