import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* NAVBAR FIXA */}
      <nav className="
        fixed top-0 left-0 w-full px-6 py-4 
        flex justify-end items-center z-50 
        bg-white/40 backdrop-blur-md text-black
        dark:bg-black/20 dark:text-white
        transition-colors duration-500
      ">
        {/* MENU BUTTON */}
        <button 
          onClick={() => setOpen(true)} 
          className="p-2 rounded-lg hover:bg-black/10 dark:hover:bg-white/10 transition"
        >
          <Menu size={32} className="text-black dark:text-white" />
        </button>
      </nav>

      {/* SIDEBAR ANIMADA */}
      <AnimatePresence>
        {open && (
          <motion.aside
            initial={{ x: 300 }}
            animate={{ x: 0 }}
            exit={{ x: 300 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="
              fixed top-0 right-0 w-64 h-full 
              bg-white/60 text-black
              dark:bg-black/80 dark:text-white 
              backdrop-blur-xl flex flex-col p-6 z-50 
              border-l border-purple-500/30
              dark:border-purple-400/30
              transition-colors duration-500
            "
          >
            <button 
              onClick={() => setOpen(false)} 
              className="mb-8 self-end p-2 hover:bg-black/10 dark:hover:bg-white/10 rounded-lg transition"
            >
              <X size={28} className="text-black dark:text-white" />
            </button>

            <ul className="space-y-6 text-lg font-medium">
              <li className="hover:text-purple-500 dark:hover:text-purple-300 transition">Home</li>
              <li className="hover:text-purple-500 dark:hover:text-purple-300 transition">Sobre</li>
              <li className="hover:text-purple-500 dark:hover:text-purple-300 transition">Projetos</li>
              <li className="hover:text-purple-500 dark:hover:text-purple-300 transition">Contato</li>
            </ul>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}
