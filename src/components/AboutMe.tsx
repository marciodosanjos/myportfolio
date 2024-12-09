import { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";

export default function AboutMe() {
  const { scrollYProgress } = useScroll();
  const [scrollValue, setScrollValue] = useState<number>(0);

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((v) => {
      setScrollValue(v);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  console.log(scrollValue);

  // Cor de fundo interpolada com base no scroll
  const backgroundColor =
    scrollValue > 0.4259688518652662 ? "#012030" : "#dafdba";
  const textColor = scrollValue > 0.6259688518652662 ? "white" : "#012030";

  return (
    <div
      style={{
        backgroundColor: backgroundColor,
        transition: "background-color 1s ease", // Transição suave para a cor de fundo
        height: "120vh",
        backgroundImage:
          scrollValue > 0.6259688518652662
            ? "linear-gradient(to right, rgba(128,128,128,0.2) 0.5px, transparent 0.5px)"
            : undefined,
        backgroundSize: "200px 200%", // Espaçamento entre as linhas
      }}
    >
      {/* Aumentando a altura da página para rolar */}
      <motion.div
        animate={{
          opacity: 10 - scrollValue, // A palavra vai desaparecer conforme o usuário rola
          y: scrollValue * 100, // A palavra também pode se mover verticalmente
        }}
      >
        <p
          style={{
            fontSize: "5rem",
            textAlign: "center",
            fontWeight: "bold",
            padding: 80,
            color: textColor, // Cor do texto alterada com base no scroll
            transition: "color 1s ease", // Transição suave para a cor do texto
          }}
        >
          <span style={{ color: "#012030" }}>
            Marketing. Web. Digital. Analytics
          </span>
          <br />
          <br />
          Impulsione seu negócio com soluções marTech
        </p>
      </motion.div>
    </div>
  );
}
