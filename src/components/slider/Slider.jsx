import "./_SliderSttyle.scss";
import { sliderImgProducts } from "../../utils/utils.js";
import { useState } from "react";
import imgprueba from "../../assets/images/image-product-1.jpg";

export default function Slider() {
  const [img, setImg] = useState();

  return (
    <div className="container-slide">
      <div className="img-principal">
        <img className="img" src={imgprueba} alt="" />
      </div>
      <div className={null}>
        {sliderImgProducts.map((img, i) => (
          <img key={img.GroupThumabil[i]} src={img.GroupThumabil[i]} />
        ))}
      </div>
    </div>
  );
}
