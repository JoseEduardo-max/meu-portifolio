import Navbar from "./components/Navbar";
import Hero from "./components/Hero";


function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#eef2ff] via-[#e0e7ff] to-[#c7d2fe] 
        dark:from-[#0a0118] dark:via-[#2d0057] dark:to-[#000000]
        text-black dark:text-white
        transition-all duration-700">
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
