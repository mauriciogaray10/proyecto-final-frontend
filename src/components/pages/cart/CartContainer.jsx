import { useNavigate } from "react-router-dom";
import CartPresentational from './CartPresentational.jsx'

const CartContainer = () => {
 
 const navigate = useNavigate();
 const realizarCompra = ()=>{
    console.log('Se compraron los productos');
    navigate('/');
 }
 
 
 
 
 
 
    return (
    <>
        <CartPresentational realizarCompra = {realizarCompra}/>
    </>
  )
}

export default CartContainer