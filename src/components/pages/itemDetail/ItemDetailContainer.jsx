import { useParams } from "react-router-dom";
import ItemDetailPresentacional from "../catálogo/ItemListPresentacional";
import { useState } from "react";
import { products } from "../../../productsMock";
import { useEffect } from "react";

const ItemDetailContainer = () => {
  const [elemento, setElemento] = useState({});

  const {id} = useParams();
  console.log(id);

  useEffect(()=>{
    let findProduct = products.find((product)=> product.id === +id)
    const getProduct = new Promise((res)=> {res(findProduct)});

    getProduct
    .then((res)=>{setElemento(res)})
    .catch((err)=>{console.log('No se encontró producto');})
  }, [id])

  
  
  
  return <ItemDetailPresentacional elemento={elemento}/>
}

export default ItemDetailContainer