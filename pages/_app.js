import CursorImageContextProvider from "contexts/CursorImageContext";
import "styles/tailwind.css";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps, router }) {
  return (
    <CursorImageContextProvider>
      {/* AnimatedPresence is used for page transitions  */}
      <AnimatePresence exitBeforeEnter>
        {/* Key must be returned for Motion Framer, asPath is used to make transitions
        possible even for pages with dynamic routing  */}
        <Component {...pageProps} key={router.asPath} />
      </AnimatePresence>
    </CursorImageContextProvider>
  );
}

export default MyApp;
