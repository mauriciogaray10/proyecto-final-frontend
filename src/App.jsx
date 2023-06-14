import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavbarContainer from './components/layouts/navbar/NavbarContainer'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<NavbarContainer/>}/>
    </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
