import { useState, useEffect } from "react";

const useMousePosition = () => {
  // Create position state and set default position to 0
  const [position, setPosition] = useState({
    clientX: 0,
    clientY: 0,
  });

  // Update position depending on event clientX and clientY
  const updatePosition = (event) => {
    const { clientX, clientY } = event;
    // If mouse is far from top of window, notice it to use it with CursorImage
    const mouseFarFromTop = clientY > window.innerHeight * 0.6 ? true : false;
    setPosition({
      clientX,
      clientY,
      mouseFarFromTop,
    });
  };

  //Triggers updatePosition on mouse move
  useEffect(() => {
    document.addEventListener("mousemove", updatePosition, false);
    document.addEventListener("mouseenter", updatePosition, false);

    // Removes event listener on clean up
    return () => {
      document.removeEventListener("mousemove", updatePosition);
      document.removeEventListener("mouseenter", updatePosition);
    };
  }, []);

  // Returning cursor position and status from top of window
  return position;
};

export default useMousePosition;
