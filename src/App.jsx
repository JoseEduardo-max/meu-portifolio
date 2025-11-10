import Navbar from "./components/Navbar";
import Hero from "./components/Hero";


function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br 
        from-gray-100 via-gray-200 to-gray-300 
        dark:from-black dark:via-purple-900 dark:to-purple-600
        text-black dark:text-white
        transition-colors duration-500">
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
