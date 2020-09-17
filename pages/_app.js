import CursorImageContextProvider from "contexts/CursorImageContext";
import "styles/tailwind.css";

function MyApp({ Component, pageProps }) {
  return (
    <CursorImageContextProvider>
      <Component {...pageProps} />
    </CursorImageContextProvider>
  );
}

export default MyApp;
