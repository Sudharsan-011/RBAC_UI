// src/services/mockApi.js

// Sample data
// mockApi.js
let users = [
  { id: 1, name: "Admin", role: "admin" },
  { id: 2, name: "John Doe", role: "editor" },
];

let roles = [
  { id: 1, name: "Admin", permissions: ["view", "edit", "delete"] },
  { id: 2, name: "Editor", permissions: ["view", "edit"] },
];

let permissions = ["view", "edit", "delete"];

// Named exports for functions
// mockApi.js
export const fetchUsers = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, name: "John Doe", email: "john.doe@example.com" },
        { id: 2, name: "Jane Smith", email: "jane.smith@example.com" },
      ]);
    }, 1000); // Simulate a delay
  });
};

export const addUser = (newUser) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const user = { id: users.length + 1, ...newUser };
      users.push(user); // Add user to the list
      resolve(user); // Return added user
    }, 1000); // Simulate delay
  });
};

export const deleteUser = (userId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const index = users.findIndex((user) => user.id === userId);
      if (index !== -1) {
        users.splice(index, 1); // Remove user
        resolve(userId); // Return deleted user's id
      }
    }, 1000); // Simulate delay
  });
};
// mockROles//
const mockRoles = [
  { id: 1, name: "Admin" },
  { id: 2, name: "Editor" },
  { id: 3, name: "Viewer" },
];

export const fetchRolesFromMockApi = () =>
  new Promise((resolve) => {
    setTimeout(() => resolve(mockRoles), 500); // Simulate an API delay
  });

export const addRoleToMockApi = (newRole) =>
  new Promise((resolve) => {
    setTimeout(() => {
      mockRoles.push({ id: Date.now(), name: newRole });
      resolve();
    }, 500);
  });

export const updateRoleInMockApi = (updatedRole) =>
  new Promise((resolve) => {
    setTimeout(() => {
      const index = mockRoles.findIndex((role) => role.id === updatedRole.id);
      if (index !== -1) {
        mockRoles[index] = updatedRole;
      }
      resolve();
    }, 500);
  });

export const deleteRoleFromMockApi = (id) =>
  new Promise((resolve) => {
    setTimeout(() => {
      const index = mockRoles.findIndex((role) => role.id === id);
      if (index !== -1) {
        mockRoles.splice(index, 1);
      }
      resolve();
    }, 500);
  });
