import { useNavigate } from "react-router-dom";
import CartPresentational from './CartPresentational.jsx'
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext.jsx";

const CartContainer = () => {
   let {cart, removeById, cleanCart} = useContext(CartContext);
 const navigate = useNavigate();
 const realizarCompra = ()=>{
    navigate('/checkout');
 }
 
 
    return (
    <>
        <CartPresentational realizarCompra = {realizarCompra} cart={cart} removeById={removeById} cleanCart={cleanCart}/>
    </>
  )
}

export default CartContainer