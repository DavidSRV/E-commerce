import { createContext, useContext, useState } from "react";
import { sliderImgProducts } from '../utils/utils'

const Count = createContext("");

export default function CountProvider({ children }) {
  const [count, setCount] = useState(null);
  const [productImg, setProductImg] = useState(sliderImgProducts);
  

  return (
    <Count.Provider
      value={{
        count,
        setCount, 
        productImg,
        setProductImg
      }}
    >
      {children}
    </Count.Provider>
  );
}

export const useCount = () => useContext(Count);
