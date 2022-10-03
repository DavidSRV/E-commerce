import "./_modalStyle.scss";
import shoes from "../../assets/images/image-product-1-thumbnail.jpg";
import trashImg from "../../assets/images/icon-delete.svg";
import { useCount } from "../../context/CounterProvider";
import { useEffect, useState } from "react"; 


export default function Modal({ modal, modalContainer}) {
  const [shoesCount, setShoesCount] = useState(0)

  const { shopCount } = useCount()

  useEffect(() => {
    setShoesCount(item => item + shopCount);
  },[shopCount]);

  const trash = () => {
    setShoesCount(0)
  }


  return (
    <div ref={modalContainer} id="modalContainer" className={`container-modal __${modal}`}>
      <div className="title">
        <h2>Cart</h2>
      </div>
      <div className={`container-empty __${shoesCount === 0 ? "block" : "hidden"}`}>
        <div className="empty-support">
          <p className={`empty `}>Your cart is empty.</p>
        </div>
      </div>
      <div className={`store __${shoesCount === 0 ? "hidden" : "block"}`}>
        <div className="store_organization">
          <img className="shoes" src={shoes} alt="img-shoes" />
          <div className="info">
            <p className="title1">Fall Limited Edition Sneakers</p>
            <p className="title2">
              {`${"$120"}.00 x ${shoesCount}`}
              <strong style={{ color: "black" }}>{` $${120*shoesCount}.00`}</strong>
            </p>
          </div>
          <span>
            <img className="trash" src={trashImg}  alt="" 
            onClick={() => trash()}/>
          </span>
        </div>
        <button className="cheackout">Checkout</button>
      </div>
    </div>
  );
}
