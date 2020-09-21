import CursorImageContextProvider from "contexts/CursorImageContext";
import "styles/tailwind.css";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps, router }) {
  return (
    <CursorImageContextProvider>
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.asPath} />
      </AnimatePresence>
    </CursorImageContextProvider>
  );
}

export default MyApp;
