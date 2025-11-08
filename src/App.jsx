import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-900 to-purple-600 text-white">
      <Navbar />

      <header className="pt-32 px-6">
        <h1 className="text-5xl font-bold">Olá, eu sou o Eduardo</h1>
        <p className="mt-4 text-xl opacity-80">Bem-vindo ao meu portfólio futurista.</p>
      </header>
    </div>
  );
}

export default App;
