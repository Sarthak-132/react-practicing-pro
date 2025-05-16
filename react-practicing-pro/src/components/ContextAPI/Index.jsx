// import { createContext, useContext } from "react";
import { createContext, use } from "react";

// step -1
export const BioContext = createContext();

// step -2
export const BioProvider = ({ children }) => {
  const myName = "Rahul";
  const age = 20;

  console.log(children);

  return (
    <BioContext.Provider value={{ myName: myName, age: age }}>
      {children}
    </BioContext.Provider>
  );
};

// Custom Hook
export const useBioContext = () => {
  // const context = useContext(BioContext);

  // in case of use hook
  const context = use(BioContext);
  if (context === undefined) {
    throw new Error("component must be used within a BioProvider");
  }
  return context;
};
