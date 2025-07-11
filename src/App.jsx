import Navbar from "./components/Navbar";
import Container from "./components/Container";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <div className="fixed -z-10 min-h-screen w-full background-color"></div>

      <div className="h-full w-full mx-auto max-w-[47.5rem] p-6">
        <Navbar />
        <main className="w-full min-h-screen h-full flex justify-center pb-10">
          <Container />
        </main>
        <Contact />
      </div>
    </>
  );
}

export default App;
