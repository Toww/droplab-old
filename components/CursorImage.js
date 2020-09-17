import { useContext } from "react";
import useMousePosition from "hooks/useMousePosition";
import { CursorImageContext } from "contexts/CursorImageContext";

const CursorImage = () => {
  const { clientX, clientY, mouseFarFromTop } = useMousePosition();
  const [cursorImage] = useContext(CursorImageContext);
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
          transform: mouseFarFromTop ? "translate(0%, -105%)" : "translate(0%, 10%)"
        }}
        className="absolute pointer-events-none transition-transform duration-500"
        src={cursorImage.src}
      ></img>
    </div>
  );
};

export default CursorImage;
