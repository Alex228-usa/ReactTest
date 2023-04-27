import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MenuItem from './MenuItem';

const Menu = ({ data, orientation, menuStyle, menuItemStyle }) => {
  const [activeSubMenu, setActiveSubMenu] = useState(null);

  const handleMouseEnter = (subMenuId) => {
    setActiveSubMenu(subMenuId);
  };

  const handleMouseLeave = () => {
    setActiveSubMenu(null);
  };

  const handleBlur = () => {
    setActiveSubMenu(null);
  };

  const renderTree = (nodes) => {
    return (
      <ul style={menuStyle}>
        {nodes.map((node) => (
          <MenuItem
            key={node.id}
            node={node}
            orientation={orientation}
            activeSubMenu={activeSubMenu}
            handleMouseEnter={handleMouseEnter}
            handleMouseLeave={handleMouseLeave}
            handleBlur={handleBlur}
            menuItemStyle={menuItemStyle}
          >
            {node.children && renderTree(node.children)}
          </MenuItem>
        ))}
      </ul>
    );
  };

  return renderTree(data);
};

Menu.propTypes = {
  data: PropTypes.array.isRequired,
  orientation: PropTypes.oneOf(['vertical', 'horizontal']),
  menuStyle: PropTypes.object,
  menuItemStyle: PropTypes.object,
};

Menu.defaultProps = {
  orientation: 'horizontal',
  menuStyle: {},
  menuItemStyle: {},
};

export default Menu;
