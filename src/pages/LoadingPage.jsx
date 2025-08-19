// import { motion } from 'framer-motion';
// import { useEffect, useState } from 'react';
// import './LoadingPage.css';

// export default function LoadingPage() {
//   const [particles, setParticles] = useState([]);

//   useEffect(() => {
//     const temp = Array.from({ length: 40 }, () => ({
//       x: Math.random() * window.innerWidth,
//       y: Math.random() * window.innerHeight,
//       size: Math.random() * 6 + 2,
//       duration: Math.random() * 5 + 3
//     }));
//     setParticles(temp);
//   }, []);

//   return (
//     <div className="loading-container">
//       {/* Floating particles */}
//       {particles.map((p, i) => (
//         <motion.div
//           key={i}
//           className="particle"
//           style={{ width: p.size, height: p.size, top: p.y, left: p.x }}
//           animate={{ y: [p.y, p.y - 200] }}
//           transition={{ duration: p.duration, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
//         />
//       ))}

//       {/* Spinner */}
//       <motion.div
//         className="loading-spinner"
//         animate={{ rotate: 360 }}
//         transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
//       />

//       {/* Loading Text */}
//       <motion.div
//         className="loading-text"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: [0, 1, 0] }}
//         transition={{ duration: 2, repeat: Infinity }}
//       >
//         Loading Norb Pharma...
//       </motion.div>
//     </div>
//   );
// }

// import { motion } from 'framer-motion';
// import { useEffect, useState } from 'react';
// import './LoadingPage.css';

// export default function LoadingPage() {
//   const [elements, setElements] = useState([]);

//   useEffect(() => {
//     const temp = Array.from({ length: 30 }, () => ({
//       x: Math.random() * window.innerWidth,
//       y: Math.random() * window.innerHeight,
//       size: Math.random() * 50 + 20,
//       scale: Math.random() * 0.5 + 0.8,
//       delay: Math.random() * 2
//     }));
//     setElements(temp);
//   }, []);

//   return (
//     <div className="loading-container">
//       {/* Pop floating elements */}
//       {elements.map((el, i) => (
//         <motion.div
//           key={i}
//           className="floating-element"
//           style={{ width: el.size, height: el.size, top: el.y, left: el.x }}
//           initial={{ scale: 0, opacity: 0 }}
//           animate={{ scale: [0, el.scale, 0], opacity: [0, 0.7, 0] }}
//           transition={{ duration: 2 + Math.random() * 2, repeat: Infinity, delay: el.delay, ease: 'easeInOut' }}
//         />
//       ))}

//       {/* Center piece animation */}
//       <motion.div
//         className="center-piece"
//         initial={{ scale: 0.8, opacity: 0 }}
//         animate={{ scale: [0.8, 1.1, 0.9, 1], rotate: [0, 15, -15, 0], opacity: [0,1,1,1] }}
//         transition={{ duration: 2, ease: 'easeInOut' }}
//       >
//         <span className="brand-logo">NORB PHARMA</span>
//       </motion.div>
//     </div>
//   );
// }

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import './LoadingPage.css';

export default function LoadingPage() {
  const [elements, setElements] = useState([]);

  useEffect(() => {
    const temp = Array.from({ length: 30 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 60 + 20,
      scale: Math.random() * 0.5 + 0.8,
      delay: Math.random() * 2,
      color: `hsl(${Math.random() * 360}, 80%, 70%)`
    }));
    setElements(temp);
  }, []);

  return (
    <div className="loading-container">
      {/* Floating colorful bubbles */}
      {elements.map((el, i) => (
        <motion.div
          key={i}
          className="floating-bubble"
          style={{ width: el.size, height: el.size, top: el.y, left: el.x, backgroundColor: el.color }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: [0, el.scale, 0], opacity: [0, 0.7, 0] }}
          transition={{ duration: 3 + Math.random() * 2, repeat: Infinity, delay: el.delay, ease: 'easeInOut' }}
        />
      ))}

      {/* Centerpiece brand */}
      <motion.div
        className="center-piece"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: [0.8, 1.1, 0.9, 1], rotate: [0, 10, -10, 0], opacity: [0,1,1,1] }}
        transition={{ duration: 2, ease: 'easeInOut' }}
      >
        <span className="brand-logo">NORB PHARMA</span>
      </motion.div>
    </div>
  );
}