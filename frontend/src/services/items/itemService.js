// itemService.js
import axios from 'axios';

const BASE_URL = 'http://localhost:5000/items/items';

export const getItems = async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const createItem = async (itemData) => {
  try {
    const response = await axios.post(BASE_URL, itemData);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const getItemById = async (itemId) => {
  try {
    const response = await axios.get(`${BASE_URL}/${itemId}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const updateItem = async (itemId, updatedItemData) => {
  try {
    const response = await axios.put(`${BASE_URL}/${itemId}`, updatedItemData);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const deleteItem = async (itemId) => {
  try {
    const response = await axios.delete(`${BASE_URL}/${itemId}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};
