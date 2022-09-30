import Cart from "../cart/Cart";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import cart from "../../assets/images/icon-cart.svg";
import { avatar } from "../../utils/utils";
import { useState } from "react";
import './_NavBarStyle.scss'

export default function NavBar() {
  const [modal, setModal] = useState("hidden");

  window.addEventListener('click', function(e){   
    if (document.getElementById('cart').contains(e.target)){
      setModal("block")
    } else if (document.getElementById('modalcontainer').contains(e.target)){
      setModal("block")
    } else{
      setModal("hidden")
    }
  });

  return (
    <header className="header-logo-links">
      <nav className="container-nav">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Logo-Sneakers" />
          </Link>
        </div>
        <div className="links">
          <Link to="/Collection">Collection</Link>
          <Link to="/Men">Men</Link>
          <Link to="/Women">Women</Link>
          <Link to="/About">About</Link>
          <Link to="/Contact">Contact</Link>
        </div>
      </nav>
      <div className="container_cart_avatar">
        <Cart modal={modal}>
          <img id='cart' className="cart" src={cart} alt="" />
        </Cart>
        <img className="avatar" src={avatar} alt="Img-User"/>
      </div>
    </header>
  );
}
