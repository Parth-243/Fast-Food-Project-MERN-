import { createContext, useState } from "react";

export const Data = createContext();
const DataProvider = ({ children }) => {
  const [count, setcount] = useState(0);

  return <Data.Provider value={{ count, setcount }}>{children}</Data.Provider>;
};

export default DataProvider;
