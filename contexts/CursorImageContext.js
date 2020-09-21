import React, { createContext, useState } from "react";

export const CursorImageContext = createContext();

const CursorImageContextProvider = ({children}) => {
  // Creating a state to check if cursorImage and set CursorImage active property
  // to false by default as it will be activated on projects' title hover
  const [cursorImage, setCursorImage] = useState({ active: false });

  return (
    <CursorImageContext.Provider value={[cursorImage, setCursorImage]}>
      {children}
    </CursorImageContext.Provider>
  );
};

export default CursorImageContextProvider;