import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import iceCoffee from "../assets/ice-coffee.png";

function callOut() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const parrallax = { y: useTransform(scrollYProgress, [0, 1], [-200, 0]) };
  return (
    <div className="callout-container" ref={container}>
      <div className="left-container">
        <div className="left">
          <h1>Best Seller</h1>
          <div className="block">
            <h2>Iced Americano</h2>
            <a className="a_button" href="#menu">
              Voir le menu
            </a>
          </div>
        </div>
      </div>
      <div className="right">
        <motion.img src={iceCoffee} alt="ice-coffee" style={parrallax} />
      </div>
    </div>
  );
}

export default callOut;
