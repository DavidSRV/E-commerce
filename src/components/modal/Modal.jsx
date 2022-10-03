import "./_modalStyle.scss";
import shoes from "../../assets/images/image-product-1-thumbnail.jpg";
import trashImg from "../../assets/images/icon-delete.svg";
import { useCount } from "../../context/CounterProvider";

export default function Modal({ modal, modalContainer }) {
  const { count, setCount } = useCount();

  return (
    <div
      ref={modalContainer}
      id="modalContainer"
      className={`container-modal __${modal}`}
    >
      <div className="title">
        <h2>Cart</h2>
      </div>

      <div className={`container-empty __${count === null ? "block" : "hidden"}`}>
        <div className="empty-support">
          <p className={`empty `}>Your cart is empty.</p>
        </div>
      </div>
      <div className={`store __${count === null ? "hidden" : "block"}`}>
        <div className="store_organization">
          <img className="shoes" src={shoes} alt="img-shoes" />
          <div className="info">
            <p className="title1">Fall Limited Edition Sneakers</p>
            <p className="title2">
              {`${"$120"}.00 x ${count}`}
              <strong style={{ color: "black" }}>{` $${
                120 * count
              }.00`}</strong>
            </p>
          </div>

          <span>
            <img
              className="trash"
              src={trashImg}
              alt=""
              onClick={() => setCount(null)}
            />
          </span>
        </div>
        <button className="cheackout">Checkout</button>
      </div>
    </div>
  );
}
