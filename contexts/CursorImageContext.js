import React, { createContext, useState } from "react";

export const CursorImageContext = createContext();

const CursorImageContextProvider = ({children}) => {
  // Creating a state to check if cursorImage is active and stock thumbnail sources.
  // (Will be used on checking if it is over a project title on homepage)
  const [cursorImage, setCursorImage] = useState({ active: false, src:'' });

  return (
    <CursorImageContext.Provider value={[cursorImage, setCursorImage]}>
      {children}
    </CursorImageContext.Provider>
  );
};

export default CursorImageContextProvider;