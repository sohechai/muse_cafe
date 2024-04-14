import menu from "../assets/menu.pdf";
import MenuComponent from "./menuComponent";

function Menu() {
  return (
    <div className="menu-container" id="menu">
      <div className="block">
        <h1>Menu</h1>
        <div className="menu-margin">
          <a href={menu} download="menu_muse.pdf" className="dl_menu">
            Télécharger menu
          </a>
        </div>
      </div>
      <MenuComponent />
    </div>
  );
}

export default Menu;
