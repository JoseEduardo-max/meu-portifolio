import { motion } from "framer-motion";

export default function Hero() {
  const subtitle = "Desenvolvedor Full-Stack";

  const typingAnimation = {
    hidden: { opacity: 0 },
    visible: (i) => ({
      opacity: 1,
      transition: { delay: i * 0.04 },
    }),
  };

  return (
    <section className="
      min-h-screen flex flex-col justify-center items-start px-8
      bg-transparent pt-24
    ">

      {/* TÍTULO COM GLOW NEON */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="
          text-5xl md:text-6xl font-extrabold 
          text-white 
          relative"
      >
        Olá, eu me chamo {" "}

        {/* GLOW ANIMADO NO NOME */}
        <motion.span
          animate={{
            textShadow: [
              "0 0 6px rgba(168,85,247,0.4)",
              "0 0 12px rgba(168,85,247,0.7)",
              "0 0 20px rgba(168,85,247,1)",
              "0 0 12px rgba(168,85,247,0.7)",
              "0 0 6px rgba(168,85,247,0.4)",
            ],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "mirror",
          }}
          className="text-purple-500"
        >
          José Eduardo
        </motion.span>
      </motion.h1>

      {/* SUBTÍTULO TYPEWRITER */}
      <motion.h2
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        className="
          text-xl md:text-2xl mt-4 
          font-medium tracking-wide
          text-white/80
          h-8 md:h-10 flex gap-1 items-center whitespace-nowrap
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

        {/* CURSOR PISCANDO */}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 1, repeat: Infinity }}
          className="ml-1 w-[2px] h-[22px] md:h-[28px] bg-purple-500"
        />
      </motion.h2>

      {/* TEXTO DESCRITIVO */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="
        max-w-xl mt-6 text-lg 
        text-white/70"
      >
        Desenvolvo interfaces modernas, responsivas e animadas, utilizando boas práticas,
        design elegante e performance. Trabalho com React, Tailwind, animações, dark mode,
        integração de APIs e criação de experiências fluidas para o usuário.
        Este portfólio mostra minhas habilidades, meus projetos e minha evolução como desenvolvedor.
      </motion.p>

      {/* BOTÃO */}
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
          hover:shadow-[0_0_25px_rgba(168,85,247,1)]
          transition-all duration-300
        "
      >
        Ver Projetos 
      </motion.a>
    </section>
  );
}
