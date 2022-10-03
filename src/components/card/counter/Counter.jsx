import plus from "../../../assets/images/icon-plus.svg";
import minus from "../../../assets/images/icon-minus.svg";
import "./_CounterStyle.scss";
import { useCount } from "../../../context/CounterProvider";
import cart from "../../../assets/images/icon-cart.svg";
import { useState } from "react";

export default function Counter() {
  const [btnCount, setBtnCount] = useState(0);
  let { setCount } = useCount();

  const setCart = () => {
    setCount((prev) => prev + btnCount);
    setBtnCount(0);
  };

  return (
    <div className="container-count-cart">
      <div className="counter">
        <img
          onClick={() => setBtnCount((prev) => (prev ? prev - 1 : prev))}
          src={minus}
          alt="minus"
        />
        <p>{btnCount}</p>
        <img
          onClick={() => setBtnCount((prev) => prev + 1)}
          src={plus}
          alt="plus"
        />
      </div>
      <div onClick={() => setCart()} className="button-addtocart">
        <img src={cart} alt="shop" />
        <p>Add to cart</p>
      </div>
    </div>
  );
}
