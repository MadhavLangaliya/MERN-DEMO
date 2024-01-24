// ItemForm.js
import React, { useState, useEffect } from 'react';
import '../../styles/items/ItemForm.css'; // Import CSS file for cascading styles

const ItemForm = ({ addItem, editItem, updateItem }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (editItem) {
      // If editing, set the form fields with the editing item's data
      setName(editItem.name);
      setDescription(editItem.description);
    }
  }, [editItem]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editItem) {
      // If editing, call the updateItem function with updated data
      updateItem(editItem._id, { name, description });
    } else {
      // If not editing, call the addItem function with new data
      addItem({ name, description });
    }
    setName('');
    setDescription('');
  };

  return (
    <div className="item-form-container">
      <h2>{editItem ? 'Edit Item' : 'Add New Item'}</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label>
          Description:
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </label>
        <button type="submit">{editItem ? 'Update Item' : 'Add Item'}</button>
      </form>
    </div>
  );
};

export default ItemForm;
