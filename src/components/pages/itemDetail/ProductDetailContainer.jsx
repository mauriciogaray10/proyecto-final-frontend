import { useEffect, useState, useContext } from "react";
import ProductDetail from "./ProductDetail";
import { useParams } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import { db } from "../../../firebaseConfig";
import {collection, getDoc, doc} from 'firebase/firestore'; 


const ProductDetailContainer = () => {
  const [productSelected, setProductSelect] = useState({});

  const {agregarAlCarrito, getTotalQuantityById} = useContext(CartContext);

   const { id } = useParams()
   let quantity = getTotalQuantityById(id)

  useEffect(() => {
    let itemColletion = collection(db, 'products');
    let refDoc = doc(itemColletion, id);
    getDoc(refDoc).then((res)=>{
     setProductSelect({
        id: res.id,
        ...res.data()
      })
      
    })


  }, [id]);


  return <ProductDetail productSelected={productSelected} agregarAlCarrito={agregarAlCarrito} quantity={quantity} />;
};

export default ProductDetailContainer;
