import "./_SliderSttyle.scss";
import { sliderImgProducts } from "../../utils/utils.js";
import { useState } from "react";
import imgprueba from "../../assets/images/image-product-1.jpg";

export default function Slider() {
  const [img, setImg] = useState("GroupImg");

  const imgSlider = sliderImgProducts.GroupThumbail.map((thumbail, i) => (
    <img
      key={sliderImgProducts.GroupThumbail[i]}
      src={thumbail}
      className="imgThumbail"
      alt="img-thumbail"
    />
  ));

  return (
    <div className="container-slide">
      <div className="cotainer-imgPrincipal">
        <img className="imgPricipal" src={imgprueba} alt="img-Principal" />
      </div>
      <div className="container-thumbail">{imgSlider}</div>
    </div>
  );
}
