import "./_SliderSttyle.scss";
import { useState } from "react";
import { useCount } from "../../context/CounterProvider";
import DisplayOver from "./displayOver/DisplayOver";

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

  return (
    <>
      <div className="container-slide">
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
