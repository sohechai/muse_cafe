import "./App.css";
import HeroSection from "./components/hero.tsx";
import Navbar from "./components/navbar.tsx";
import CallOut from "./components/callOut.tsx";
import Menu from "./components/menu.tsx";
import About from "./components/about.tsx";
import Gallery from "./components/gallery.tsx";
import Footer from "./components/footer.tsx";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach((el) => {
      console.log("clique");
      el.addEventListener("click", (e) => {
        e.preventDefault();
        const id = el.getAttribute("href")?.slice(1);
        if (!id) return;
        const target = document.getElementById(id);
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      });
    });
  }, []);

  return (
    <>
      <div>
        <Navbar />
        <HeroSection />
        <CallOut />
        <Menu />
        <About />
        <Gallery />
        <Footer />
      </div>
    </>
  );
}

export default App;
