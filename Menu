import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDrag, useDrop } from 'react-dnd';
import './Menu.css';

const MenuItem = ({ item, index, moveItem }) => {
  const [draggedIndex, setDraggedIndex] = useState(null);
  const [, drag] = useDrag({
    item: { type: 'menu-item', index },
    begin: () => {
      setDraggedIndex(index);
      return { index };
    },
    end: () => setDraggedIndex(null),
  });
  const [, drop] = useDrop({
    accept: 'menu-item',
    hover: (item) => {
      if (draggedIndex !== null && item.index !== draggedIndex) {
        moveItem(draggedIndex, item.index);
        setDraggedIndex(item.index);
      }
    },
  });

  return (
    <li ref={(node) => drag(drop(node))} className="menu-item">
      <a href={item.link}>{item.label}</a>
      {item.children && (
        <Menu data={item.children} orientation="vertical" />
      )}
    </li>
  );
};

const Menu = ({ data, orientation, style }) => {
  const [activeItem, setActiveItem] = useState(null);

  const moveItem = (dragIndex, hoverIndex) => {
    const dragItem = data[dragIndex];
    setActiveItem(null);
    const newData = [...data];
    newData.splice(dragIndex, 1);
    newData.splice(hoverIndex, 0, dragItem);
  };

  const renderTree = (treeData) => {
    return (
      <ul className={`menu ${orientation}`} style={style}>
        {treeData.map((item, index) => (
          <MenuItem
            key={item.id}
            item={item}
            index={index}
            moveItem={moveItem}
          />
        ))}
      </ul>
    );
  };

  return renderTree(data);
};

Menu.propTypes = {
  data: PropTypes.array.isRequired,
  orientation: PropTypes.oneOf(['horizontal', 'vertical']),
  style: PropTypes.object,
};

Menu.defaultProps = {
  orientation: 'horizontal',
  style: {},
};

export default Menu;
