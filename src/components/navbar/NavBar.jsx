import Cart from "../cart/Cart";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import cart from "../../assets/images/icon-cart.svg";
import { avatar } from "../../utils/utils";
import "./_NavBar.scss";

export default function NavBar() {
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
        <Cart>
          <Link to="/">
            <img className="cart" src={cart} alt="" />
          </Link>
        </Cart>
        <img className="avatar" src={avatar} alt="Img-User" />
      </div>
    </header>
  );
}