import { createContext, useContext, useState } from "react";

const ResetContext = createContext();

export const useReset = () => useContext(ResetContext);

export const ResetProvider = ({ children }) => {
  const [resetCounter, setResetCounter] = useState(0);

  const triggerReset = () => {
    setResetCounter(prev => prev + 1);
  };

  return (
    <ResetContext.Provider value={{ resetCounter, triggerReset }}>
      {children}
    </ResetContext.Provider>
  );
};