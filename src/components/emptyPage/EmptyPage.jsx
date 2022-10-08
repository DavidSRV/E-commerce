import { Link } from "react-router-dom";
import "./_EmptyPageStyle.scss";

export default function EmptyPage() {
  return (
    <div className="container-emptyPage">
      <div className="emptyPage">
        <h1>This site is under construction!!</h1>
        <Link to="/E-commerce">
          <button>Back to home</button>
        </Link>
      </div>
    </div>
  );
}
