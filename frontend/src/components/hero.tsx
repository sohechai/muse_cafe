import { useRef } from "react";
import heroImg from "../assets/hero-image.png";
import { motion, useScroll, useTransform } from "framer-motion";

function HeroSection() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const parrallax = { y: useTransform(scrollYProgress, [0, 1], [0, -500]) };

  return (
    <div className="hero-container" ref={container}>
      <div className="image-container">
        <img src={heroImg} alt="hero" />
      </div>
      <div className="hero-right">
        <motion.div className="title" style={parrallax}>
          <h1>
            Découvrez l'inspiration au cœur de chaque tasse chez Muse Coffee
            Shop, où l'art du café rencontre la créativité dans un cadre
            enchanteur.
          </h1>
        </motion.div>
      </div>
    </div>
  );
}

export default HeroSection;
