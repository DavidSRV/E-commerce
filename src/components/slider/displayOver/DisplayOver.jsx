import "./_DisplayOverStyle.scss";
import { useState } from "react";
import { useCount } from "../../../context/CounterProvider";
import arrowLeft from "../../../assets/images/icon-previous.svg";
import arrowRigth from "../../../assets/images/icon-next.svg";
import close from "../../../assets/images/icon-close.svg";

export default function DisplayOver({ Over }) {
  const [imgPrincipal, setImgPrincipal] = useState(0);

  const { productImg } = useCount();

  const displayOver = productImg;

  const { GroupImg } = displayOver;

  const overlaythumabilImg = displayOver.GroupImg.map((img, i) => (
    <img
      key={displayOver.GroupThumbail[i]}
      src={img}
      className="imgThumbail"
      alt="img-thumbail-Over"
      onClick={() => setImgPrincipal(i)}
    />
  ));

  return (
    <div className="displayOver-Window">
      <div className="container-displayOver">
        <div className="container-close">
          <img onClick={Over} className="close" src={close} alt="close" />
        </div>

        <img
          className="imgPrinicipal-Over"
          src={GroupImg[imgPrincipal]}
          alt="imgPrincipal-Over"
        />

        <span
          onClick={() => setImgPrincipal((img) => (img === 3 ? 0 : img + 1))}
          className="container-arrowRigth"
        >
          <img className="arrowRigth" src={arrowRigth} alt="arrowRigth" />
        </span>

        <span
          onClick={() => setImgPrincipal((img) => (img === 0 ? 3 : img - 1))}
          className="container-arrowLeft"
        >
          <img className="arrowLeft" src={arrowLeft} alt="arrowLeft" />
        </span>
      </div>

      <div className="container-thumabail-Over">{overlaythumabilImg}</div>
    </div>
  );
}
