import hot from "../assets/hot.svg";
import iced from "../assets/iced.svg";
import dessert from "../assets/dessert.svg";

type MenuType = {
  category: string;
  icon: string;
  items: {
    name: string;
    description?: string;
    price: number;
  }[];
};

const menuData: MenuType[] = [
  {
    category: "HOT",
    icon: hot,
    items: [
      { name: "Americano", price: 2 },
      { name: "Double Espresso", price: 2 },
      { name: "Cappuccino", price: 3 },
      { name: "Latte", price: 2 },
      { name: "Mocha", price: 3 },
      { name: "Macchiato", price: 3 },
      { name: "Chocolat chaud", price: 2 },
    ],
  },
  {
    category: "ICED",
    icon: iced,
    items: [
      { name: "Jus d’orange pressée", description: "bio", price: 4 },
      { name: "Jus de pomme", description: "bio", price: 3 },
      { name: "Iced Americano", description: "chocolat, vanille", price: 3 },
      { name: "Iced Tea", description: "pêche, framboise", price: 3 },
      { name: "Iced Mocha", price: 3 },
    ],
  },
  {
    category: "DESSERT",
    icon: dessert,
    items: [
      { name: "Muffins", description: "chocolat, vanille", price: 3 },
      { name: "Cookies", description: "mocha, chocolat, vanille", price: 3 },
      {
        name: "Brownies",
        description: "chocolat, cacahuète, peccan",
        price: 3,
      },
    ],
  },
];

export default menuData;
