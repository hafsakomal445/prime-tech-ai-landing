import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Capabilities from "./components/Capabilities";
import Workflow from "./components/Workflow";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="bg-[#050816] text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <Capabilities />
      <Workflow />
      <Contact />
    </div>
  );
}

export default App;