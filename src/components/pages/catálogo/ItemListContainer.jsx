import ItemListPresentacional from "./ItemListPresentacional"
import { useEffect, useState } from "react";
import {products} from '../../../productsMock.js';
import { useParams } from "react-router-dom";






const ItemListContainer = () => {
 
  const [items, setItems] = useState([]);
  const {categoryName} = useParams();
  console.log(categoryName);




  useEffect(() => {

    let productosFiltrados = products.filter(
      (product) => product.category === categoryName
    );

    const tarea = new Promise((resolve) => {
      resolve(categoryName ? productosFiltrados : products);
    });

    tarea
      .then((respuesta) => setItems(respuesta))
      .catch((rechazo) => {
        console.log(rechazo);
      });

  }, [categoryName]);







  
  return <ItemListPresentacional items={items}/>
   
  
}

export default ItemListContainer