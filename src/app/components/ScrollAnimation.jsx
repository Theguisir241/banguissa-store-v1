"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function ScrollAnimation({
  children,
  animation = "fade",
  duration = 0.8,
  delay = 0,
}) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const variants = {
    fade: { hidden: { opacity: 0 }, visible: { opacity: 1 } },
    slideUp: { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } },
    slideDown: { hidden: { opacity: 0, y: -50 }, visible: { opacity: 1, y: 0 } },
    slideLeft: { hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0 } },
    slideRight: { hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } },
    zoomIn: { hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } },
    zoomOut: { hidden: { opacity: 0, scale: 1.2 }, visible: { opacity: 1, scale: 1 } },
    rotate: { hidden: { opacity: 0, rotate: -15 }, visible: { opacity: 1, rotate: 0 } },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants[animation]}
      transition={{ duration, delay }}
    >
      {children}
    </motion.div>
  );
}
