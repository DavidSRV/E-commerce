import Counter from "./counter/Counter";
import './_CardStyle.scss'

export default function Card() {
  return (
    <div className="container-Card">
      <div className="section1-card">
        <p className="title">SNEAKER COMPANY</p>
        <h1>Fall Limited Edition Sneakers</h1>
        <p className="parr">
          These low-profile sneakers are your perfect casual wear companion.
          featuring a durable rubber outer sole, they'll withstand everything
          the weather can offer
        </p>
      </div>
      <div className="section2-card">
        <div className="card">
        <h3>$125.00</h3>
        <p>50%</p>
        </div>
        
        <div className="oldprice">$250.00</div>
      </div>
    <Counter />
    </div>
    
  );
}
