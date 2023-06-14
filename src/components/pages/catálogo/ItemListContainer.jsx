import ItemListPresentacional from "./ItemListPresentacional"
import { useEffect, useState } from "react";
import {products} from '../../../productsMock.js';
import { useParams } from "react-router-dom";



const ItemListContainer = () => {
 
  const [items, setItems] = useState([]);
  const { category } = useParams();
  useEffect(()=>{
    let productosFiltrados = products.filter(
      (product) => product.category === category
    );


    const tarea = new Promise((resolve) =>{
      resolve ( category ? productosFiltrados : products);
    });

    tarea
    .then((res)=> setItems(res))
    .catch((rechazo)=>{
      console.log('Solicitud rechazada');
    });
  }, [category]);







  
  return <ItemListPresentacional items={items}/>
   
  
}

export default ItemListContainer