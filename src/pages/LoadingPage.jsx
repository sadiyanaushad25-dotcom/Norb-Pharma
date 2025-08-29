import { motion, AnimatePresence } from "framer-motion";
import logo from "/logo.png";
import "./LoadingPage.css";

export default function LoadingPage({ progress, isDone }) {
  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          className="loading-container"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 1 } }}
        >
          {/* Rotating Logo */}
          <motion.img
            src={logo}
            alt="Logo"
            className="loading-logo"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            layoutId="app-logo"
          />

          {/* Company Name */}
          <motion.div
            className="company-name"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            NORB PHARMA
          </motion.div>

          {/* Progress Bar */}
          <motion.div className="progress-wrapper">
            <motion.div
              className="progress-bar"
              initial={{ width: "0%" }}
              animate={{ width: `${Math.round(progress)}%` }}
              transition={{ ease: "easeOut", duration: 0.3 }}
            />
          </motion.div>
          <p className="progress-text">{Math.round(progress)}%</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
