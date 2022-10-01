import plus from "../../../assets/images/icon-plus.svg";
import minus from "../../../assets/images/icon-minus.svg";
import "./_CounterStyle.scss";
import { useCount } from "../../../context/CounterProvider";
import cart from '../../../assets/images/icon-cart.svg'


export default function Counter() {
  let { count, setCount } = useCount();

  const minusCount = () => {
    count !== 0 ? setCount(count - 1) : setCount((count = 0));
  };
  
  const plusCount = () => {
    setCount(count + 1);
  };


  return (
    <div className="container-count-cart">
      <div className="counter">
        <img onClick={() => minusCount()} src={minus} alt="minus" />
        <p>{count}</p>
        <img onClick={() => plusCount()} src={plus} alt="plus" />
      </div>
      <div className="button-addtocart">
        <img src={cart} alt="shop" />
        <p>Add to cart</p>
      </div>
    </div>
  );
}
