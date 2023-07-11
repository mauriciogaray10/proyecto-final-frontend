import { useEffect, useState, useContext } from "react";
import ProductDetail from "./ProductDetail";
import { products } from "../../../productsMock";
import { useParams } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";


const ProductDetailContainer = () => {
  const [productSelected, setProductSelect] = useState({});

  const {agregarAlCarrito, getTotalQuantityById} = useContext(CartContext);

   const { id } = useParams()
   let quantity = getTotalQuantityById(id)

  useEffect(() => {
    let productFind = products.find((product) => product.id === +id); 

    const getProduct = new Promise((res) => {
      res(productFind);
    });

    getProduct
      .then((res) => setProductSelect(res))
      .catch((err) => console.log(err));
  }, [id]);


  return <ProductDetail productSelected={productSelected} agregarAlCarrito={agregarAlCarrito} quantity={quantity} />;
};

export default ProductDetailContainer;
