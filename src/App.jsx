import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/layouts/layout/Layout.jsx'
import ItemListContainer from './components/pages/catálogo/ItemListContainer'



function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route element={<Layout/>}>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/category/:id' element={<ItemListContainer/>}/>
        <Route path='/item/:id' element={<ItemDetailContainer/>}/>
      
      </Route>
    </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
