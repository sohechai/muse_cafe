import menu from "../assets/menu-data.tsx";

const MenuComponent = () => {
  return (
    <div className="menu">
      {menu.map((category) => (
        <div key={category.category}>
          <div className="category">
            <h2 className="menu-category">{category.category}</h2>
            <img src={category.icon} alt={category.category} />
          </div>
          {category.items.map((item) => (
            <div className="menu-content">
              <div className="left-menu-content">
                <p>{item.name}</p>
                <span>{item.description}</span>
              </div>
              <div className="right-menu-content">
                <p>{item.price}-</p>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default MenuComponent;
