import "./App.css";
import Companion from "./components/sections/Companion";
import Discovery from "./components/sections/Discovery";
import Family from "./components/sections/Family";
import Hero from "./components/sections/Hero";

function App() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Companion />
      <Discovery />
      <Family />
    </div>
  );
}

export default App;
