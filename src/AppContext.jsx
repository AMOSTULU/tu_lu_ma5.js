

import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();


export function AppProvider({ children }) {
  const [count, setCount] = useState(0);

  const handleCellToggle = (isOn) => {

    setCount((prevCount) => (isOn ? prevCount + 1 : prevCount - 1));
  };

  return (
    <AppContext.Provider value={{ count, handleCellToggle }}>
      {children}
    </AppContext.Provider>
  );
}


export function useAppContext() {
  return useContext(AppContext);
}
