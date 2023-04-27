import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MenuItem from './MenuItem';

const Menu = ({ data, isVertical, style }) => {
  const [activeItem, setActiveItem] = useState(null);

  const handleMouseEnter = (item) => {
    setActiveItem(item);
  };

  const handleMouseLeave = () => {
    setActiveItem(null);
  };

  const handleBlur = () => {
    setActiveItem(null);
  };

  const renderTree = (items, parentId = null) => {
    const renderedItems = items
      .filter((item) => item.parentId === parentId)
      .map((item) => {
        const hasChildren = items.some((child) => child.parentId === item.id);

        return (
          <MenuItem
            key={item.id}
            label={item.label}
            href={item.href}
            hasChildren={hasChildren}
            isVertical={isVertical}
            isActive={activeItem === item}
            onMouseEnter={() => handleMouseEnter(item)}
            onMouseLeave={handleMouseLeave}
            onBlur={handleBlur}
            style={style}
          >
            {hasChildren && renderTree(items, item.id)}
          </MenuItem>
        );
      });

    return (
      <ul
        className={`menu ${isVertical ? 'menu--vertical' : 'menu--horizontal'}`}
      >
        {renderedItems}
      </ul>
    );
  };

  return renderTree(data);
};

Menu.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      parentId: PropTypes.number,
      label: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  isVertical: PropTypes.bool,
  style: PropTypes.object,
};

Menu.defaultProps = {
  isVertical: false,
  style: {},
};

export default Menu;
