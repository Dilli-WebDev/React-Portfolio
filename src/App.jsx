import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <div className="fixed -z-10 min-h-screen w-full background-color"></div>

      <main className="h-full w-full mx-auto max-w-[47.5rem] p-6">
        <Navbar />
        <Hero />
      </main>
    </>
  );
}

export default App;
