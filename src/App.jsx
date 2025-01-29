import About from "./components/about";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <>
      <div className="w-full overflow-hidden">
        <Header />
        <About/>
        <Projects/>
        <Testimonials/>
      </div>
    </>
  );
}

export default App;
