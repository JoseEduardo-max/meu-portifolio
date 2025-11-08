import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* NAVBAR FIXA */}
      <nav className="fixed top-0 left-0 w-full px-6 py-4 flex justify-end items-center z-50 bg-black/20 backdrop-blur-md">
        {/* MENU BUTTON */}
        <button 
          onClick={() => setOpen(true)} 
          className="p-2 rounded-lg hover:bg-white/10 transition"
        >
          <Menu size={32} className="text-white" />
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
            className="fixed top-0 right-0 w-64 h-full bg-black/80 backdrop-blur-xl flex flex-col p-6 z-50 border-l border-purple-500/30"
          >
            <button 
              onClick={() => setOpen(false)} 
              className="mb-8 self-end p-2 hover:bg-white/10 rounded-lg transition"
            >
              <X size={28} className="text-white" />
            </button>

            <ul className="space-y-6 text-white text-lg font-medium">
              <li className="hover:text-purple-400 transition">Home</li>
              <li className="hover:text-purple-400 transition">Sobre</li>
              <li className="hover:text-purple-400 transition">Projetos</li>
              <li className="hover:text-purple-400 transition">Contato</li>
            </ul>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}
