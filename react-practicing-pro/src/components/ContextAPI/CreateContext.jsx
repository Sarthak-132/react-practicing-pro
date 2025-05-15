import { createContext } from "react";

// step -1
export const BioContext = createContext();

// step -2
export const BioProvider = () => {
  const myName = "Rahul";
  return <BioContext.Provider value={myName}></BioContext.Provider>;
};
