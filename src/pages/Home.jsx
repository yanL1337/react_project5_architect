import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Focus from "../components/Focus/Focus";
import Intro from "../components/Intro/Intro";
import Projects from "../components/Projects/Projects";

const Home = () => {
  return (
    <main>
      <Intro />
      <About />
      <Focus />
      <Projects />
      <Contact />
    </main>
  );
};

export default Home;
