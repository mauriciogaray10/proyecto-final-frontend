import ItemListPresentacional from "./ItemListPresentacional"
import { useEffect, useState } from "react";
import {products} from '../../../productsMock.js';




const ItemListContainer = () => {
 
  const [items, setItems] = useState([]);
  useEffect(()=>{
    
    const tarea = new Promise((resolve) =>{
      resolve ( products);
    });

    tarea
    .then((res)=> setItems(res))
    .catch((rechazo)=>{
      console.log('Solicitud rechazada');
    });
  }, []);







  
  return <ItemListPresentacional items={items}/>
   
  
}

export default ItemListContainer