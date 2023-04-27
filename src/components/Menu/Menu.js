import React, { useState } from "react";

const Menu = ({ data, orientation, style }) => {
  const [activeSubMenu, setActiveSubMenu] = useState(null);

  const handleSubMenuOpen = (id) => {
    setActiveSubMenu(id);
  };

  const handleSubMenuClose = () => {
    setActiveSubMenu(null);
  };

  const handleBlur = () => {
    handleSubMenuClose();
  };

  const renderTree = (items, level = 0) => {
    const tree = items.map((item) => {
      const hasChildren = item.children && item.children.length > 0;
      const isActive = activeSubMenu === item.id;

      return (
        <li
          key={item.id}
          onMouseEnter={() => handleSubMenuOpen(item.id)}
          onMouseLeave={() => handleSubMenuClose()}
          onBlur={() => handleBlur()}
          style={{ ...style, marginLeft: level * 20 }}
        >
          <a href={item.link} style={isActive ? { fontWeight: "bold" } : {}}>
            {item.label}
          </a>
          {hasChildren && (
            <ul style={{ display: isActive ? "block" : "none" }}>
              {renderTree(item.children, level + 1)}
            </ul>
          )}
        </li>
      );
    });

    return tree;
  };

  const orientationClass = orientation === "horizontal" ? "menu-horizontal" : "menu-vertical";

  return <ul className={`menu ${orientationClass}`}>{renderTree(data)}</ul>;
};

export default Menu;
