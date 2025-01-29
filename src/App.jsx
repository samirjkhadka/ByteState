import { ToastContainer } from "react-toastify";
import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

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
        <Footer/>
      </div>
    </>
  );
}

export default App;
