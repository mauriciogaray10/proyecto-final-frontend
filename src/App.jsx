import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/layouts/layout/Layout.jsx'



function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route element={<Layout/>}>
        <Route path='/' element={<h1>Hola</h1>}/>
      </Route>
    </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
