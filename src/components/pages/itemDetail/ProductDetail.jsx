import { ItemCount } from "../../common/ItemCount";

const ProductDetail = ({ productSelected }) => {

  const onAdd = (cantidad) => {
    
    let data = {
      ...productSelected,
      quantity: cantidad,
    };

    console.log(data);
  };

  return (
    <>
      <div>
        <h1>{productSelected.title}</h1>
        <img src={productSelected.img} alt="" />
      </div>

      <h1>      {productSelected.stock > 0 ? (
        <ItemCount stock={productSelected.stock} initial={1} onAdd={onAdd} />
      ) : (
        <h3>No hay stock</h3>
      )}</h1>
    </>
  );
};

export default ProductDetail;
