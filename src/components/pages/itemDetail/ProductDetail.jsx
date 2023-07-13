import { ItemCount } from "../../common/ItemCount";
import { Link } from "react-router-dom";
import styles from "./productDetail.module.css";



const ProductDetail = ({ productSelected, agregarAlCarrito, quantity }) => {




  const onAdd = (cantidad) => {
    
    let data = {
      ...productSelected,
      quantity: cantidad,
    };
    agregarAlCarrito(data)

    
  }

  return (
    <div>
      <div className={styles.containerItemDetail}>
        <div className={styles.containerImage}>
          <img src={productSelected.img} alt="" />
        </div>

        <div className={styles.containerDetail}>
          <h2 style={{ fontFamily: "monospace" }}>
            <span style={{ fontSize: "23px" }}>Nombre:</span>{" "}
            {productSelected.title}
          </h2>
          <h2 style={{ fontFamily: "monospace" }}>
            <span style={{ fontSize: "23px" }}>Descripcion:</span>{" "}
            {productSelected.description}
          </h2>
          <h2 style={{ fontFamily: "monospace" }}>
            <span style={{ fontSize: "23px" }}>Precio:</span> 
            {productSelected.price}.-
          </h2>
        </div>
      </div>
     
      {productSelected.stock > 0 ? (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <ItemCount
            stock={productSelected.stock}
            onAdd={onAdd}
            initial={quantity}
          />
        </div>
      ) : (
        <h2>No hay stock</h2>
      )}

        
      
    </div>
  );
};

export default ProductDetail;
