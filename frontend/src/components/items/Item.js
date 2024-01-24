// Item.js
import React from 'react';
import '../../styles/items/Item.css'; // Adjust the path based on your directory structure

const Item = ({ item, onEdit, onUpdate, onDelete }) => {
  return (
    <div className="item-card">
      <div className="item-info">
        <h3>{item.name}</h3>
        <p>{item.description}</p>
      </div>
      <div className="item-actions">
        <span className="edit-icon" onClick={() => onEdit(item)}>
          ✎
        </span>
        <span className="delete-icon" onClick={() => onDelete(item._id)}>
          ❌
        </span>
        {onUpdate && (
          <span className="update-icon" onClick={() => onUpdate(item)}>
            🔄
          </span>
        )}
      </div>
    </div>
  );
};

export default Item;
