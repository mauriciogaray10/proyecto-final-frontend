import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/layouts/layout/Layout.jsx'
import ItemListContainer from './components/pages/catálogo/ItemListContainer'
import ItemDetailContainer from './components/pages/itemDetail/ItemDetailContainer'



function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route element={<Layout/>}>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/category/:categoryName' element={<ItemListContainer/>}/>
        <Route path='/item/:id' element={<ItemDetailContainer/>}/>
      </Route>
      <Route path='*' element={<h1>Page not found</h1>}/>
    </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
