
import { createContext, useState } from "react";


export const CartContext = createContext();


const CartContextProvider = ({children}) => {
   const [cart, setCart] = useState([])

   const  agregarAlCarrito = (data) => {
    if(isInCart(data.id)){
        let newArray = cart.map(product => {
            if(product.id === data.id){
                return {
                    ...product,
                    quantity: product.quantity + data.quantity
                }
            }else{
                return product
            }
        })
        setCart([newArray]);

    }else{
        setCart([...cart, data])
    }
    }

    const isInCart = (id) => {
        let exist = cart.some(prod => prod.id === id)
        return exist
    }


    const cleanCart = () => {
        setCart([]);
    }

    const getTotalQuantityById = (id) =>{
        let product = cart.find( prod => prod.id === +id);
        return product?.quantity
    }

    const removeById = (id)=>{
        let newArray = cart.filter ( (product) => product.id !== id)
        setCart(newArray)
    }
    
  let data = {
    cart,
    agregarAlCarrito,
    cleanCart,
    removeById,
    getTotalQuantityById
  }
  
  
  return <CartContext.Provider value = {data}>
    {children}
  </CartContext.Provider>
}

export default CartContextProvider;