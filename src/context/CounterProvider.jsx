import { createContext, useContext, useState } from "react";

const Count = createContext("");

export default function CountProvider({ children }) {
  const [count, setCount] = useState(null);

  return (
    <Count.Provider
      value={{
        count,
        setCount
      }}
    >
      {children}
    </Count.Provider>
  );
}

export const useCount = () => useContext(Count);
