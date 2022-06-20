import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
const Home = () => {
  const {handleCart,cart} = useContext(CartContext)
 
  const [products,setProducts] = React.useState([])
  React.useEffect(()=>{
    getData()
  },[])

  function getData(){
    fetch(` env.process.REACT_APP_BASE_URL/products`)
    .then((res)=>res.json())
    .then((res)=>setProducts(res))
  }

  function deleteP(id){
    fetch(`  env.process.REACT_APP_BASE_URL/${id}`,{
      method:"DELETE",
      headers:{
        "Content-type":"Application/json"
      }
    })
    .then(()=>getData())
  }

  return <div>
    {
      products.map((item)=>(
        <div key={item.id} >
        <h2>{item.name}</h2>
        <h2>{item.description}</h2>
        <button>Add To Cart</button>
        <br />
        <button  onClick={()=>handleCart(1)} >Increment</button>
        <button disabled={cart==0} onClick={()=>handleCart(-1)} >Decrement</button>
        <button onClick={()=>deleteP(item.id)} >Remove</button>

        </div>
        
      ))
    }
  </div>;
};

export default Home;
