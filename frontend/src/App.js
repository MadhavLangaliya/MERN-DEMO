// App.js
import React, { useState, useEffect } from 'react';
import { getItems, createItem, updateItem as updateItemService, deleteItem as deleteItemService } from './services/items/itemService';
import ItemList from './components/items/ItemList';
import ItemForm from './components/items/ItemForm';

function App() {
  const [items, setItems] = useState([]);
  const [editingItem, setEditingItem] = useState(null);

  useEffect(() => {
    async function fetchItems() {
      try {
        const fetchedItems = await getItems();
        setItems(fetchedItems);
      } catch (error) {
        console.error(error.message);
      }
    }
    fetchItems();
  }, []);

  const addItem = async (newItemData) => {
    try {
      const newItem = await createItem(newItemData);
      setItems([...items, newItem]);
    } catch (error) {
      console.error(error.message);
    }
  };

  const updateItem = async (itemId, updatedItemData) => {
    try {
      const updatedItem = await updateItemService(itemId, updatedItemData);
      setItems((prevItems) =>
        prevItems.map((item) => (item._id === updatedItem._id ? updatedItem : item))
      );
      setEditingItem(null);
    } catch (error) {
      console.error(error.message);
    }
  };

  const deleteItem = async (itemId) => {
    try {
      await deleteItemService(itemId);
      setItems((prevItems) => prevItems.filter((item) => item._id !== itemId));
    } catch (error) {
      console.error(error.message);
    }
  };

  const editItem = (editedItem) => {
    setEditingItem(editedItem);
  };

  return (
    <div className="App">
      <h1>MERN CRUD App</h1>
      <ItemForm addItem={addItem} editItem={editingItem} updateItem={updateItem} />
      <ItemList items={items} editItem={editItem} updateItem={updateItem} deleteItem={deleteItem} />
    </div>
  );
}

export default App;
