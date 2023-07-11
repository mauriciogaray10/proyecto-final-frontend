

const CartPresentational = ({realizarCompra, cart, removeById, cleanCart}) => {
  
  return (
    <div>
        
        <h1>Carrito</h1>
  
        <div>
          {
            cart.map((product)=>{
              return (
                <div key = {product.id}>
                  <h2>{product.title}</h2>
                  <h3>{product.price}._</h3>
                  <button onClick={()=>removeById(product.id)}>Borrar</button>
                </div>
                
              )
            })
          }

        </div>
        <button onClick={cleanCart}>Vaciar carrito</button>
        <button onClick={realizarCompra}>Comprar</button>
    
    </div>
  )
}

export default CartPresentational