import "./_modalStyle.scss";
import shoes from "../../assets/images/image-product-1-thumbnail.jpg";
import trash from "../../assets/images/icon-delete.svg";

export default function Modal({ modal }) {
  return (
    <div className={`container-modal __${modal}`}>
      <div className="title">
        <h2>Cart</h2>
      </div>
      <div className={`container-empty __${"hidden"}`}>
        <div className="empty-support">
          <p className={`empty `}>Your cart is empty.</p>
        </div>
      </div>
      <div className={`store __${"block"}`}>
        <div className="store_organization">
          <img className="shoes" src={shoes} alt="img-shoes" />
          <div className="info">
            <p className="title1">Fall Limited Edition Sneakers</p>
            <p className="title2">
              {`${"$120"}.00 x ${"3"}`}
              <strong style={{ color: "black" }}>{`  $${120*3}.00`}</strong>
            </p>
          </div>
          <span>
            <img className="trash" src={trash} alt="" />
          </span>
        </div>
        <button className="cheackout">Checkout</button>
      </div>
    </div>
  );
}
