import Navbar from '../navbar/Navbar.jsx'
import { Outlet } from 'react-router-dom'
const Layout = () => {
  return (
    <div>
        <Navbar/>
        <Outlet/>
    </div>
  )
}

export default Layout