// import { useEffect, useRef } from "react";

// export default function useSnapScroll(sectionCount) {
//   const currentSection = useRef(0);
//   const isScrolling = useRef(false);

//   useEffect(() => {
//     const handleWheel = (e) => {
//       if (isScrolling.current) return;

//       if (e.deltaY > 20) {
//         // Scroll down
//         if (currentSection.current < sectionCount - 1) {
//           currentSection.current += 1;
//           snapToSection();
//         }
//       } else if (e.deltaY < -20) {
//         // Scroll up
//         if (currentSection.current > 0) {
//           currentSection.current -= 1;
//           snapToSection();
//         }
//       }
//     };

//     const snapToSection = () => {
//       isScrolling.current = true;
//       window.scrollTo({
//         top: currentSection.current * window.innerHeight,
//         behavior: "smooth",
//       });
//       setTimeout(() => {
//         isScrolling.current = false;
//       }, 800); // match smooth scroll duration
//     };

//     window.addEventListener("wheel", handleWheel, { passive: false });

//     return () => {
//       window.removeEventListener("wheel", handleWheel);
//     };
//   }, [sectionCount]);
// }

import { useEffect, useRef } from "react";

export default function useSnapScrollById(sectionIds) {
  const currentIndex = useRef(0);
  const isScrolling = useRef(false);

  useEffect(() => {
    const handleWheel = (e) => {
      if (isScrolling.current) return;

      if (e.deltaY > 14 && currentIndex.current < sectionIds.length - 1) {
        // Scroll down
        currentIndex.current += 1;
        snapToSection(sectionIds[currentIndex.current]);
      } 
      else if (e.deltaY < -14 && currentIndex.current > 0) {
        // Scroll up
        currentIndex.current -= 1;
        snapToSection(sectionIds[currentIndex.current]);
      }
    };

    const snapToSection = (id) => {
      isScrolling.current = true;
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => {
        isScrolling.current = false;
      }, 800); // matches smooth scroll duration
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [sectionIds]);
}
