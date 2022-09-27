import Cart from "../cart/Cart";
import { Link } from "react-router-dom";
import logo from '../../assets/images/logo.svg'
import cart from '../../assets/images/icon-cart.svg'
import { avatar } from "../../utils/utils";
import "./_NavBar.scss";

export default function NavBar() {
  return (
    <header>
      <nav className="container">
        <div className="logo">
          <Link to="/"><img src={logo} alt="Logo-Sneakers" /></Link> 
        </div>
        <div className="anchors">
          <a href="#">
            <Link to="/Collection">Collection</Link>
          </a>
          <a href="#">
            <Link to="/Men">Men</Link>
          </a>
          <a href="#">
            <Link to="/Women">Women</Link>
          </a>
          <a href="#">
            <Link to="/About">About</Link>
          </a>
          <a href="#">
            <Link to="/Contact">Contact</Link>
          </a>
        </div>
        <div className="Cart">
          <Cart>
            <Link to="/">
              <img src={cart} alt="" />
            </Link>
          </Cart>
        </div>
        <div className="imgUser">
          <img src={avatar} alt="Img-User" />
        </div>
      </nav>
    </header>
  );
}
