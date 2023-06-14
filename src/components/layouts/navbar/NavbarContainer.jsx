import { useState } from "react";
import NavbarPresentacional from "./NavbarPresentacional";


const NavbarContainer = () => {
    const pages = ['Paquetes', 'Vuelos', 'Micros', 'Hoteles', 'Alquileres'];
    const settings = ['Perfil', 'Alertas', 'Historial', 'Logout'];

    const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  
    return (
    <div>
        <NavbarPresentacional handleCloseNavMenu = {handleCloseNavMenu}  handleOpenUserMenu={handleOpenUserMenu} handleCloseUserMenu={handleCloseUserMenu} handleOpenNavMenu={handleOpenNavMenu} pages={pages} settings={settings} anchorElNav={anchorElNav} setAnchorElNav={setAnchorElNav} anchorElUser={anchorElUser} setAnchorElUser={setAnchorElUser}/>
        
    </div>


  )
  
}

export default NavbarContainer;