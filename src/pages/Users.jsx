import React, { useState, useEffect } from "react";
import Modal from "../components/Modal.jsx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { fetchUsers } from "../services/mockApi"; // Import the mock API function

const Users = () => {
  const [users, setUsers] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newUser, setNewUser] = useState({ name: "", email: "" });

  useEffect(() => {
    // Fetch mock users on component mount
    fetchUsers()
      .then((data) => setUsers(data))
      .catch((err) => console.error("Error fetching users:", err));
  }, []);

  useEffect(() => {
    console.log("isModalOpen updated to:", isModalOpen);
  }, [isModalOpen]);

  const handleAddUser = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!newUser.name.trim() || !newUser.email.trim()) {
      alert("Please fill in both name and email.");
      return;
    }
    if (!emailRegex.test(newUser.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Add new user to the users list
    setUsers([
      ...users,
      { id: Date.now(), name: newUser.name, email: newUser.email },
    ]);

    // Reset the newUser state and close the modal
    setNewUser({ name: "", email: "" });
    setIsModalOpen(false);

    // Show success toast
    toast.success("User added successfully!");
  };

  const handleDeleteUser = (userId) => {
    setUsers(users.filter((user) => user.id !== userId));
    // Show success toast for deletion
    toast.error("User deleted successfully!");
  };

  
  return (
    
    <div className="p-4">
      <ToastContainer />
      <h1 className="text-2xl font-bold mb-4">Manage Users</h1>
      <div className="mb-6">
        <button
          onClick={() => setIsModalOpen(true)} // Just set the modal open on click
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded shadow"
        >
          Add New User
        </button>
        {isModalOpen && (
  <Modal onClose={() => setIsModalOpen(false)}>
    <h2 className="text-xl font-bold mb-4">Add New User</h2>
    {/* Form Inputs */}
    <input
      type="text"
      value={newUser.name}
      onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
      placeholder="Enter name"
      className="w-full border border-gray-300 rounded px-4 py-2 mb-2"
    />
    <input
      type="email"
      value={newUser.email}
      onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
      placeholder="Enter email"
      className="w-full border border-gray-300 rounded px-4 py-2 mb-4"
    />
    <div className="flex justify-end">
      <button
        onClick={handleAddUser}
        className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded shadow mr-2"
      >
        Add User
      </button>
      <button
        onClick={() => setIsModalOpen(false)}
        className="bg-gray-300 hover:bg-gray-400 text-black px-4 py-2 rounded shadow"
      >
        Cancel
      </button>
    </div>
  </Modal>
)}

        
      </div>

      <table className="table-auto w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user) => (
              <tr key={user.id}>
                <td className="border px-4 py-2">{user.name}</td>
                <td className="border px-4 py-2">{user.email}</td>
                <td className="border px-4 py-2">
                  <button
                    onClick={() => handleDeleteUser(user.id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded shadow"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" className="text-center py-4">
                No users found. Add a new user to get started!
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Conditional rendering of the Modal */}
      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <h2 className="text-xl font-bold mb-4">Add New User</h2>
          <input
            type="text"
            value={newUser.name}
            onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
            placeholder="Enter name"
            className="w-full border border-gray-300 rounded px-4 py-2 mb-2"
          />
          <input
            type="email"
            value={newUser.email}
            onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
            placeholder="Enter email"
            className="w-full border border-gray-300 rounded px-4 py-2 mb-4"
          />
          <div className="flex justify-end">
            <button
              onClick={handleAddUser}
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded shadow mr-2"
            >
              Add User
            </button>
            <button
              onClick={() => setIsModalOpen(false)} // Close the modal
              className="bg-gray-300 hover:bg-gray-400 text-black px-4 py-2 rounded shadow"
            >
              Cancel
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Users;
