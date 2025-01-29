import { ToastContainer } from "react-toastify";
import About from "./components/about";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <>
      <div className="w-full overflow-hidden">
        <ToastContainer/>
        <Header />
        <About/>
        <Projects/>
        <Testimonials/>
        <Contact/>
      </div>
    </>
  );
}

export default App;
