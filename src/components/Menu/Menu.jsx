import React from "react";
import Menu from "./Menu";

const menuData = [
  {
    id: 1,
    label: "Home",
    link: "/",
  },
  {
    id: 2,
    label: "Products",
    link: "/products",
    children: [
      {
        id: 3,
        label: "Product 1",
        link: "/products/product1",
      },
      {
        id: 4,
        label: "Product 2",
        link: "/products/product2",
      },
    ],
  },
];

const App = () => {
  return <Menu data={menuData} style={{ color: "blue" }} />;
};

export default App;
