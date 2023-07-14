import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/layouts/layout/Layout.jsx'
import ItemListContainer from './components/pages/catálogo/ItemListContainer.jsx'
import ProductDetailContainer from './components/pages/itemDetail/ProductDetailContainer.jsx'
import Componente1 from './components/pages/cart/CartContainer.jsx'
import CartContextProvider from './context/CartContext.jsx'
import CheckoutContainer from './components/pages/checkout/CheckoutContainer'




function App() {

  return (
    <>
 
    <BrowserRouter>
   <CartContextProvider>
          <Routes>
      <Route element={<Layout/>}>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/category/:categoryName' element={<ItemListContainer/>}/>
        <Route path='/item/:id' element={<ProductDetailContainer/>}/>
        <Route path='/cart' element={<Componente1/>}/>
        <Route path='/checkout' element={<CheckoutContainer/>}/>
      </Route>
      <Route path='*' element={<h1>Page not found</h1>}/>
    </Routes>
    </CartContextProvider>
    </BrowserRouter>

    </>
  )
}

export default App
