import { useEffect, useState } from "react";
import { useScroll, motion } from "framer-motion";
import { useInView } from "react-intersection-observer"; // Importando hook

export default function ServicesItems() {
  const { scrollYProgress } = useScroll();
  const [scrollValue, setScrollValue] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true, // Acionado cada vez que a div entra na tela
    threshold: 0.1, // Quando 20% do ícone estiver visível
  });

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((v) => {
      setScrollValue(v);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  const backgroundColor =
    scrollValue > 0.4259688518652662 ? "#012030" : "#dafdba";

  // Definindo os serviços com o ícone como propriedade
  const services = [
    {
      title: "Websites",
      description:
        "Desenho e implemento websites usando CMS como ou tecnologias nativas Javascript",
      icon: (
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          width="250"
          height="250"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ display: "block" }}
          initial={{ strokeDashoffset: 72 }} // Inicializa o contorno como invisível
          animate={{
            strokeDashoffset: inView ? 0 : 72, // Se o ícone estiver visível, desenha o contorno
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
          }}
        >
          <motion.rect
            x="3"
            y="3"
            width="18"
            height="18"
            rx="2"
            stroke="#dafdba"
            fill="none"
            strokeDasharray="72"
            strokeDashoffset="72"
            animate={{
              strokeDashoffset: inView ? 0 : 72, // Se estiver na tela, desenha o retângulo
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
            }}
          />
          <motion.path
            d="M3 9h18"
            stroke="#dafdba"
            fill="none"
            strokeDasharray="18"
            strokeDashoffset="18"
            animate={{
              strokeDashoffset: inView ? 0 : 18, // Se estiver na tela, desenha o caminho
            }}
            transition={{
              duration: 2,
              delay: 1,
              ease: "easeInOut",
            }}
          />
        </motion.svg>
      ),
    },
    {
      title: "Data analytics",
      description:
        "Desenvolvimento de dashboards e streaming de dados para a tomada de decisão baseada em dados",
      icon: (
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          width="250"
          height="250"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ display: "block" }}
          initial={{ strokeDashoffset: 72 }} // Inicializa o contorno como invisível
          animate={{
            strokeDashoffset: inView ? 0 : 72, // Se o ícone estiver visível, desenha o contorno
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
          }}
        >
          <motion.rect
            x="3"
            y="3"
            width="18"
            height="18"
            rx="2"
            stroke="#dafdba"
            fill="none"
            strokeDasharray="72"
            strokeDashoffset="72"
            animate={{
              strokeDashoffset: inView ? 0 : 72, // Se estiver na tela, desenha o retângulo
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
            }}
          />
          <motion.path
            d="M3 9h18"
            stroke="#dafdba"
            fill="none"
            strokeDasharray="18"
            strokeDashoffset="18"
            animate={{
              strokeDashoffset: inView ? 0 : 18, // Se estiver na tela, desenha o caminho
            }}
            transition={{
              duration: 2,
              delay: 1,
              ease: "easeInOut",
            }}
          />
        </motion.svg>
      ),
    },
    {
      title: "Marketing",
      description:
        "Estratégias de marketing para aumentar a visibilidade e engajamento da sua marca",
      icon: (
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          width="250"
          height="250"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#dafdba"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ display: "block" }}
          initial={{ strokeDashoffset: 72 }} // Inicializa o contorno como invisível
          animate={{
            strokeDashoffset: inView ? 0 : 72, // Se o ícone estiver visível, desenha o contorno
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
          }}
        >
          <path d="m3 11 18-5v12L3 14v-3z" />
          <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
        </motion.svg>
      ),
    },
  ];

  return (
    <div
      className="service-items"
      style={{
        backgroundColor: backgroundColor,
        transition: "background-color 1s ease",
        height: "250vh",
        backgroundImage:
          "linear-gradient(to right, rgba(128,128,128,0.2) 0.5px, transparent 0.5px)",
        backgroundSize: "200px 200%",
        color: "#ffffff",
        paddingLeft: "12rem",
        paddingRight: "18rem",
        display: "flex",
        flexDirection: "column",
        gap: "20rem",
      }}
    >
      {services.map((service, index) => (
        <div
          key={index}
          className="service-item"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: 20,
            }}
          >
            <motion.h2 animate={{ opacity: 1 }} style={{ fontSize: "3rem" }}>
              {service.title}
            </motion.h2>
            <motion.p
              animate={{ opacity: 1 }}
              style={{ fontSize: "2rem", width: "30rem" }}
            >
              {service.description}
            </motion.p>
          </div>
          <div ref={ref}>
            {/* Renderizando o ícone do serviço */}
            {service.icon}
          </div>
        </div>
      ))}
    </div>
  );
}
