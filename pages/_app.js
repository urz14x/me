import { motion } from 'framer-motion';
import "tailwindcss/tailwind.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <motion.div initial="pageInitial" animate="pageAnimate" variants={{
      pageInitial: {
        opacity: 0
      },
      pageAnimate: {
        opacity: 1
      }
    }}>
      <Component {...pageProps} />
    </motion.div>
  )


}

export default MyApp
