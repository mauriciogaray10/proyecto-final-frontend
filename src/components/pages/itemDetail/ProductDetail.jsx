import ProductDetailCard from "../../common/productDetailCard/ProductDetailCard";



const ProductDetail = ({ productSelected }) => {
  
  
  return (
    <>
    <ProductDetailCard elemento={productSelected}/>
    </>
  );
};

export default ProductDetail;
