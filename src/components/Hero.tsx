import { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";
import styles from "../styles/page.module.css"; // Importando o CSS

export default function Hero() {
  const { scrollYProgress } = useScroll();
  const [scrollValue, setScrollValue] = useState(0);

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((v) => {
      setScrollValue(v);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <div className={styles.hero}>
      {/* Aumentando a altura da página para rolar */}
      <motion.div
        animate={{
          opacity: 1 - scrollValue, // A palavra vai desaparecer conforme o usuário rola
          y: scrollValue * 100, // A palavra também pode se mover verticalmente
        }}
      >
        <h1 style={{ fontSize: "5rem", fontWeight: "bold" }}>
          Hello, nice to see you here
        </h1>
        <p>I am a web developer and I am happy to help you</p>
      </motion.div>
    </div>
  );
}
