import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  // Ativa/desativa tema
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <>
      {/* NAVBAR FIXA */}
      <nav
        className="
        fixed top-0 left-0 w-full px-6 py-4 flex justify-end items-center z-50 
        bg-transparent text-white
        "
      >
        {/* MENU BUTTON */}
        <button
          onClick={() => setOpen(true)}
          className="p-2 rounded-lg hover:bg-white/10 transition"
        >
          <Menu size={32} className="text-white" />
        </button>
      </nav>

      {/* SIDEBAR */}
      <AnimatePresence>
        {open && (
          <motion.aside
            style={{ right: 0, left: "auto" }}
            initial={{ x: 300 }}
            animate={{ x: 0 }}
            exit={{ x: 300 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="
              fixed top-0 right-0 w-72 h-full 
              bg-black/60 backdrop-blur-xl 
              border-l border-purple-500/30 
              flex flex-col p-6 z-50
              text-white
            "
          >
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-white text-xl font-semibold">Menu</h2>

              <button
                onClick={() => setOpen(false)}
                className="p-2 hover:bg-white/10 rounded-lg transition"
              >
                <X size={28} className="text-white" />
              </button>
            </div>

            {/* LINKS COM GLOW + ANIMAÇÃO */}
            <ul className="space-y-6 text-white text-lg font-medium">
              {["Home", "Sobre", "Projetos", "Contato"].map((item, i) => (
                <motion.li
                  key={i}
                  whileHover={{
                    scale: 1.07,
                    textShadow:
                      "0 0 6px rgba(168,85,247,0.9), 0 0 15px rgba(168,85,247,0.7)",
                    color: "rgb(168 85 247)",
                  }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="cursor-pointer text-white"
                >
                  {item}
                </motion.li>
              ))}
            </ul>

            {/* BOTÃO DE MUDAR TEMA */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="
                mt-auto w-full py-3 px-4 rounded-xl
                flex items-center justify-center gap-3
                bg-purple-600 hover:bg-purple-700
                dark:bg-purple-500 dark:hover:bg-purple-600
                text-white font-semibold shadow-lg
              "
            >
              {darkMode ? <Sun size={22} /> : <Moon size={22} />}
              {darkMode ? "Modo Claro" : "Modo Escuro"}
            </button>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}
