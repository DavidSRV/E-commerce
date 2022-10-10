import "./_SliderSttyle.scss";
import { useState, useRef } from "react";
import { useMediaQuery } from "react-responsive";
import { useCount } from "../../context/CounterProvider";
import DisplayOver from "./displayOver/DisplayOver";
import arrowLeft from "../../assets/images/icon-previous.svg";
import arrowRigth from "../../assets/images/icon-next.svg";

export default function Slider() {
  const { productImg } = useCount();

  const sliderImgProducts = productImg;

  const { GroupImg } = sliderImgProducts;

  const [img, setImg] = useState(0);

  const imgSlider = sliderImgProducts.GroupThumbail.map((thumbail, i) => (
    <img
      key={sliderImgProducts.GroupThumbail[i]}
      src={thumbail}
      className="imgThumbail"
      alt="img-thumbail"
      onClick={() => setImg([i])}
    />
  ));

  const [displayOver, setDisplayOver] = useState(false);

  const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ query: "(max-width:800px)" });
    return isMobile ? children : null;
  };


  return (
    <>
      <div
        className="container-slide"
      >
        <Mobile>
          <img className="mobileImg" src={GroupImg[img]} alt="mobileImg"></img>
          <div
            onClick={() => setImg((img) => (img === 3 ? 0 : img + 1))}
            className="arrowRigth"
          >
            <img src={arrowRigth} alt="arrowRigth" />
          </div>
          <div
            onClick={() => setImg((img) => (img === 0 ? 3 : img - 1))}
            className="arrowLeft"
          >
            <img src={arrowLeft} alt="arrowLeft" />
          </div>
        </Mobile>
        <div
          onClick={() => setDisplayOver(true)}
          className="cotainer-imgPrincipal"
        >
          <img
            className="imgPricipal"
            src={GroupImg[img]}
            alt="img-Principal"
          />
        </div>
        <div className="container-thumbail">{imgSlider}</div>
      </div>
      {displayOver && <DisplayOver Over={() => setDisplayOver(false)} />}
    </>
  );
}
