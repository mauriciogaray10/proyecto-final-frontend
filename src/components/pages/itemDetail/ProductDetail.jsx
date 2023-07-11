import { ItemCount } from "../../common/ItemCount";
import { Link } from "react-router-dom";



const ProductDetail = ({ productSelected, agregarAlCarrito, quantity }) => {




  const onAdd = (cantidad) => {
    
    let data = {
      ...productSelected,
      quantity: cantidad,
    };
    agregarAlCarrito(data)

    
  };

  return (
    <>
      <div>
        <h1>{productSelected.title}</h1>
        <img src={productSelected.img} alt="" />
        <h1>Unidades disponibles: {productSelected.stock}</h1>
      </div>

       {productSelected.stock > 0 ? (
        <ItemCount stock={productSelected.stock} initial={quantity} onAdd={onAdd} />
        
      ) : (
        <h3>No hay stock</h3>
      )}
      <Link to={'/cart'}><button>Terminar mi compra</button></Link>
      
    </>
  );
};

export default ProductDetail;
