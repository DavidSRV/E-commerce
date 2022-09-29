import "./_modalStyle.scss";
import shoes from "../../assets/images/image-product-1-thumbnail.jpg";

export default function Modal({ modal }) {

  return (
    <div className={`container-modal __${modal}`}>
      <div className="title">
        <h2>Cart</h2>
      </div>
      <p className={`empty __${"block"}`}>Your cart is empty</p>
      <div className={`store __${"hidden"}`}>
        <img src={shoes} alt="img-shoes" />
        <p>Fall Limited Edition Sneakers</p>
        <p>
          {`${"price"} x ${"estado"}`} <strong>{`${"estadoxprice"}`}</strong>
        </p>
        <button className="cheackout">Checkout</button>
      </div>
    </div>
  );
}
