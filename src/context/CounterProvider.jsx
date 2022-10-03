import { createContext, useContext, useState } from "react";

const Count = createContext("");

export default function CountProvider({ children }) {
  const [count, setCount] = useState(0);
  const [shopCount, setShopCount] = useState(0);

  return (
    <Count.Provider
      value={{
        count,
        setCount,
        shopCount,
        setShopCount,
      }}
    >
      {children}
    </Count.Provider>
  );
}

export const useCount = () => useContext(Count);
