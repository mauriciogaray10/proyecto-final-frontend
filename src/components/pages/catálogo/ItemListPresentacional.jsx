import ProductCard from "../../common/productCard/productCard"
const ItemListPresentacional = ({items}) => {
  
    return (
      <div>
  
        {
          items.map((elemento) => {
            return <ProductCard key = {elemento.id} product = {elemento}/>
          })
        }
  
  
  
      </div>
    )
  
}

export default ItemListPresentacional