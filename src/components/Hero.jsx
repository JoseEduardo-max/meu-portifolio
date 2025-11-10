import { motion } from "framer-motion";

export default function Hero() {
  // ✅ Texto que será digitado
  const subtitle = "Desenvolvedor Front-End & Futuro Full-Stack";

  // ✅ Animação de digitação (uma letra por vez)
  const typingAnimation = {
    hidden: { opacity: 0 },
    visible: (i) => ({
      opacity: 1,
      transition: {
        delay: i * 0.04, // velocidade da digitação
      },
    }),
  };

  return (
    <section
      className="
        min-h-screen flex flex-col justify-center items-start px-8
        bg-transparent pt-24
      "
    >
      {/* TÍTULO ANIMADO */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="
          text-5xl md:text-6xl font-extrabold 
          text-black dark:text-white 
        "
      >
        Olá, eu sou o <span className="text-purple-500">Eduardo</span>
      </motion.h1>

      {/* SUBTÍTULO COM EFEITO DIGITANDO + CURSOR */}
      <motion.h2
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        className="
          text-xl md:text-2xl mt-4 
          font-medium tracking-wide
          text-gray-700 dark:text-gray-300
          h-8 md:h-10 flex gap-1 flex-wrap items-center
        "
      >
        {subtitle.split("").map((char, i) => (
          <motion.span
            key={i}
            custom={i}
            variants={typingAnimation}
            initial="hidden"
            animate="visible"
            className="inline-block"
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}

        {/* ✅ CURSOR PISCANDO */}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 1, 0], // pisca
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
          }}
          className="ml-1 w-1 h-6 bg-purple-500"
        ></motion.span>
      </motion.h2>

      {/* TEXTO DESCRITIVO */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="
          max-w-xl mt-6 text-lg 
          text-gray-600 dark:text-gray-300
        "
      >
        Construo interfaces modernas, com animações suaves, dark mode e design futurista.
        Este portfólio mostra meu estilo, meus projetos e minha evolução como dev.
      </motion.p>

      {/* BOTÃO ANIMADO */}
      <motion.a
        href="#projetos"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="
          mt-10 px-6 py-3 rounded-xl font-semibold text-lg
          bg-purple-600 text-white
          hover:bg-purple-700
          dark:bg-purple-500 dark:hover:bg-purple-600
          shadow-[0_0_15px_rgba(168,85,247,0.6)]
          hover:shadow-[0_0_20px_rgba(168,85,247,0.9)]
          transition-all duration-300
        "
      >
        Ver Projetos 🚀
      </motion.a>
    </section>
  );
}
