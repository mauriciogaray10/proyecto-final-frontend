import { useState, useEffect } from "react";
import ItemListPresentacional from './ItemListPresentacional.jsx';
import { useParams } from "react-router";
import {db} from '../../../firebaseConfig.js';
import {collection, getDocs, query, where} from 'firebase/firestore' 

const ItemListContainer = () => {
  const [items, setitems] = useState([]);

  const {categoryName} = useParams();

  useEffect(()=>{
    let itemsCollection = collection(db, 'products');
    let consulta;

    if(!categoryName){
      consulta = itemsCollection;
    }else{
      consulta = query(itemsCollection, where('category', '==', categoryName));
    }
    getDocs(consulta)
    .then((res)=>{
      let products = res.docs.map(item => {
      return {
        id: item.id,
        ...item.data()
      }
      })
      setitems(products)
    })
    .catch((err)=>{console.log(err);});

  }, [categoryName])
  
  
  
  
  
  return <ItemListPresentacional items = {items}/>;
}

export default ItemListContainer;