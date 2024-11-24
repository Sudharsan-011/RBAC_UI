// src/services/api.js

import axios from "axios";
import { fetchUsers, addUser, deleteUser } from "./mockApi"; // Import mock API functions

// Toggle to use mock or real API
const useMockApi = true;

// Create Axios instance for real API
const realApi = axios.create({
  baseURL: "https://your-backend-url.com/api", // Replace with your backend URL
  headers: {
    "Content-Type": "application/json",
  },
});

// Define API wrapper
export const api = {
  // Fetch users
  getUsers: () =>
    useMockApi ? fetchUsers() : realApi.get("/users").then((res) => res.data),

  // Add a new user
  addUser: (user) =>
    useMockApi
      ? addUser(user)
      : realApi.post("/users", user).then((res) => res.data),

  // Delete a user
  deleteUser: (id) =>
    useMockApi
      ? deleteUser(id)
      : realApi.delete(`/users/${id}`).then((res) => res.data),
};
