import "./App.css";
import Companion from "./components/sections/Companion";
import Discovery from "./components/sections/Discovery";
import Family from "./components/sections/Family";
import Find from "./components/sections/Find";
import Footer from "./components/sections/Footer";
import Hero from "./components/sections/Hero";
import Testimonials from "./components/sections/Testimonials";

function App() {
  return (
    <div className="flex flex-col gap-sm md:gap-md lg:gap-lg">
      <Hero />
      <Companion />
      <Discovery />
      <Family />
      <Find />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
