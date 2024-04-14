import logo from "../assets/logo.svg";

function Navbar() {
  return (
    <div className="navbar-container" id="home">
      <img src={logo} alt="" className="navbar-logo" />
      <div className="navbar">
        <a href="#menu" className="navbar-link">
          Menu
        </a>
        <a href="#about" className="navbar-link">
          À propos
        </a>
        <a href="#gallery" className="navbar-link">
          Galerie
        </a>
        <a href="#contact" className="navbar-link">
          Contact
        </a>
      </div>
    </div>
  );
}

export default Navbar;
