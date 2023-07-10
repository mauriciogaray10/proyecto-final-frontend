import { useState, useEffect } from "react";
import ItemListPresentacional from './ItemListPresentacional.jsx';
import { products } from "../../../productsMock";
import { useParams } from "react-router";

const ItemListContainer = () => {
  const [items, setitems] = useState([]);

  const {categoryName} = useParams();

  useEffect(()=>{
    let productosFiltrados = products.filter(
    (product) => product.category === categoryName
  );
  const tarea = new Promise((resolve) => {
    resolve(categoryName ? productosFiltrados : products);
  });

  tarea
    .then((res)=> setitems(res))
    .catch((rej)=> console.log(rej));

  }, [categoryName])
  
  
  
  
  
  return <ItemListPresentacional items = {items}/>;
}

export default ItemListContainer;