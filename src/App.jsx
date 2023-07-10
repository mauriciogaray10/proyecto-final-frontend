import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/layouts/layout/Layout.jsx'
import ItemListContainer from './components/pages/catálogo/ItemListContainer.jsx'
import ProductDetailContainer from './components/pages/itemDetail/ProductDetailContainer.jsx'
import CartContainer from './components/pages/cart/cartContainer.jsx'



function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route element={<Layout/>}>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/category/:categoryName' element={<ItemListContainer/>}/>
        <Route path='/item/:id' element={<ProductDetailContainer/>}/>
        <Route path='/cart' element={<CartContainer/>}/>
      </Route>
      <Route path='*' element={<h1>Page not found</h1>}/>
    </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
