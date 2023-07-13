import { Link } from "react-router-dom"


const CartPresentational = ({realizarCompra, cart, removeById, cleanCart}) => {
  
  return (
    <div>
        
        <h1>Carrito</h1>
  
        <div>
          {cart.length === 0 ?('No hay items', (<Link to={'/'}><button>Volver a la página principal</button></Link>)) : 
            (cart.map((product)=>{
              return (
                <div key = {product.id}>
                  <h2>{product.title}</h2>
                  <h3>${product.price}._</h3>
                  <button onClick={()=>removeById(product.id)}>Borrar</button>
                </div>
              )
            }))
            
          }
                  <button onClick={cleanCart}>Vaciar carrito</button>
            <button onClick={realizarCompra}>Comprar</button>
      
        </div>

    </div>
  )
}

export default CartPresentational