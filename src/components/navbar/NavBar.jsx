import Cart from "../cart/Cart";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import cart from "../../assets/images/icon-cart.svg";
import { avatar } from "../../utils/utils";
import { useEffect, useState, useRef } from "react";
import "./_NavBarStyle.scss";
import { useCount } from "../../context/CounterProvider";

export default function NavBar() {
  const [modal, setModal] = useState("hidden");

  const { count } = useCount();

  let modalShow = useRef(null);

  useEffect(() => {
    window.addEventListener("click", function (e) {
      if (modalShow.current.contains(e.target)) {
        setModal("block");
      } else if (document.getElementById("modalContainer").contains(e.target)) {
        setModal("block");
      } else {
        setModal("hidden");
      }
    });
  });

  return (
    <header className="header-logo-links">
      <nav className="container-nav">
        <div className="logo">
          <Link to="/E-commerce">
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
      {count > 0 && <div className="popUp">{count}</div>}
        <Cart modal={modal}>
          <img ref={modalShow} className="cart" src={cart} alt="" />
        </Cart>
        <img className="avatar" src={avatar} alt="Img-User" />
      </div>
    </header>

  );
}
