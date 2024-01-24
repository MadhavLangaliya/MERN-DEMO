// ItemList.js
import React from 'react';
import Item from './Item';
import '../../styles/items/ItemList.css'; // Import CSS file for cascading styles

const ItemList = ({ items, editItem, updateItem, deleteItem }) => {
  return (
    <div className="item-list-container">
      {items.map((item) => (
        <Item
          key={item._id}
          item={item}
          onEdit={() => editItem(item)}
          onUpdate={updateItem}
          onDelete={deleteItem}
        />
      ))}
    </div>
  );
};

export default ItemList;
