import { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";

export default function Services() {
  const { scrollYProgress } = useScroll();
  const [scrollValue, setScrollValue] = useState(0);

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((v) => {
      setScrollValue(v);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  const backgroundColor =
    scrollValue > 0.4259688518652662 ? "#012030" : "#dafdba";
  const textColor = scrollValue > 0.4259688518652662 ? "white" : "#012030";

  return (
    <div
      className="service"
      style={{
        backgroundColor: backgroundColor,
        transition: "background-color 1s ease",
        height: "50vh",
        backgroundImage:
          "linear-gradient(to right, rgba(128,128,128,0.2) 0.5px, transparent 0.5px)", // Linhas verticais
        backgroundSize: "200px 200%", // Espaçamento entre as linhas
      }}
    >
      <motion.div
        animate={{
          opacity: 10 - scrollValue, // A palavra vai desaparecer conforme o usuário rola
          y: scrollValue * 100, // A palavra também pode se mover verticalmente
        }}
      >
        <h2
          style={{
            fontSize: "4rem",
            color: textColor,
            transition: "background-color 1s ease",
            textAlign: "center",
          }}
        >
          O que faço
        </h2>
      </motion.div>
    </div>
  );
}
