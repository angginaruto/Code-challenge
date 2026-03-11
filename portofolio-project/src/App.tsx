import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Portofolio from "./components/Portofolio";
import Skill from "./components/Skill";
import Testimonial from "./components/Testimonial";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Skill />
      <Portofolio />
      <Experience />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
