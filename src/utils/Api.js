import axios from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com'; 

const fetchTodos = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/todos`);
    return response.data;
  } catch (error) {
    console.error('Error fetching todos:', error);
    throw error; 
  }
};

const fetchTodoById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/todos/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching todo:', error);
    throw error; 
  }
};

const createTodo = async (todoData) => {
  try {
    const response = await axios.post(`${BASE_URL}/todos`, todoData);
    return response.data;
  } catch (error) {
    console.error('Error creating todo:', error);
    throw error; 
  }
};

const updateTodo = async (id, updatedData) => {
  try {
    const response = await axios.put(`${BASE_URL}/todos/${id}`, updatedData);
    return response.data;
  } catch (error) {
    console.error('Error updating todo:', error);
    throw error; 
  }
};

const deleteTodo = async (id) => {
  try {
    const response = await axios.delete(`${BASE_URL}/todos/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting todo:', error);
    throw error; 
  }
};

export { fetchTodos, fetchTodoById, createTodo, updateTodo, deleteTodo };