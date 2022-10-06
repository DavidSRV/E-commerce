import "./_SliderSttyle.scss";
import { sliderImgProducts } from "../../utils/utils.js";
import { useState } from "react";

export default function Slider() {
  const { GroupImg } = sliderImgProducts;

  const [displayOver, setDisplayOver] = useState(true);
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

  return (
    <div className="container-slide">
      <div className="cotainer-imgPrincipal">
        <img className="imgPricipal" src={GroupImg[img]} alt="img-Principal" />
      </div>
      <div className="container-thumbail">{imgSlider}</div>

      {displayOver && (
        <div className="container-displayOver">
          <div className="container-imgPrincipal">
            <img className="imgPrincipal" src={GroupImg[img]} alt="" />
          </div>

          <div className="container-thumbail">
            <div>{imgSlider}</div>
          </div>
        </div>
      )}
    </div>
  );
}
