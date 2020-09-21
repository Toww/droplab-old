import { useContext, useEffect } from "react";
import useMousePosition from "hooks/useMousePosition";
import { CursorImageContext } from "contexts/CursorImageContext";

//Preparing a variable to check if website 
// is loaded on a touch device on first mount
let isTouchDevice;

const CursorImage = () => {
  // Checking mouse position and using cursorImage context to check if cursor image
  // should be displayed and which thumbnail should be loaded
  const { clientX, clientY, mouseFarFromTop } = useMousePosition();
  const [cursorImage] = useContext(CursorImageContext);

  // Check touch device on first mount via useEffect
  useEffect(() => {
    if ("ontouchstart" in window) {
      isTouchDevice = true;
    } else {
      isTouchDevice = false;
    }
  }, []);

  // If a touch device is detected, prevent component from loading by returning null
  if (isTouchDevice) {
    return null;
  }
  // If it is not a touch devise, return component
  return (
    <div
      style={{
        zIndex: 2,
        opacity: cursorImage.active ? "1" : "0",
      }}
      className="fixed top-0 bottom-0 left-0 right-0 pointer-events-none transition-all duration-300 ease-in-out"
    >
      <img
        style={{
          left: clientX,
          top: clientY,
          // When mouse is far from top of window,
          // to avoid hiding elements, put the image on top of the cursor
          transform: mouseFarFromTop
            ? "translate(0%, -105%)"
            : "translate(0%, 10%)",
        }}
        className="absolute pointer-events-none transition-transform duration-500"
        src={cursorImage.src}
        alt={`${cursorImage.title} thumbnail`}
      ></img>
    </div>
  );
};

export default CursorImage;
