import { Badge } from "@mui/material";
import { BsFillCartCheckFill } from "react-icons/bs";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

const Navbar = () => {
  let {getTotalItems} = useContext(CartContext)

  let totalItems = getTotalItems()

  
 
  return (
    <>
      <div className={styles.containerNavbar}>
        <Link to="/">TravelWorld</Link>
        <ul className={styles.categories}>
          <Link to="/">Limpiar filtros</Link>
          <Link to="/category/Vuelos">Vuelos</Link>
          <Link to="/category/Micros">Micros</Link>
          <Link to="/category/Hoteles">Hoteles</Link>
          <Link to="/category/Alquileres">Alquileres</Link>
          <Link to="/category/Paquetes">Paquetes</Link>
        </ul>

        <Link to="/cart">
          <Badge badgeContent={totalItems} showZero color="primary">
            <BsFillCartCheckFill size="30px" />
          </Badge>
        </Link>
      </div>
    </>
  );
};

export default Navbar;
