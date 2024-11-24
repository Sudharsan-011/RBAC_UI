import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { useAuthContext } from "../context/AuthContext"; // Assuming AuthContext provides user info
import { FaUserAlt, FaUserShield, FaLock } from 'react-icons/fa'; // Importing icons for added flair
import Header from "../components/Header";

const Dashboard = () => {
  const { currentUser } = useAuthContext(); // Access the logged-in user info if needed

  return (
    <>
      <Header />
      <div className="bg-cover bg-center bg-no-repeat min-h-screen p-4" style={{ backgroundImage: "url('/path-to-your-image.jpg')" }}>
        <div className="bg-white bg-opacity-80 rounded-lg shadow-lg p-6">
          <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
            Welcome to Your Dashboard
          </h1>

          {currentUser && (
            <div className="mb-6 text-center">
              <p className="text-xl">
                Hello, <span className="font-semibold">{currentUser.name}</span> 👋
              </p>
              <p className="text-gray-600 mt-2">Your role: {currentUser.role}</p>
            </div>
          )}

          {/* Dashboard Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Users Card */}
            <div className="bg-blue-500 text-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out hover:bg-blue-400">
              <div className="flex items-center justify-between">
                <FaUserAlt size={40} className="text-white" />
                <h2 className="font-semibold text-xl">Users</h2>
              </div>
              <p className="mt-4">Manage and view all users here.</p>
              <Link
                to="/users"
                className="inline-block mt-4 px-6 py-2 rounded-lg bg-white text-blue-500 font-semibold hover:bg-blue-50 transition-all duration-200"
              >
                Go to Users
              </Link>
            </div>

            {/* Roles Card */}
            <div className="bg-green-500 text-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out hover:bg-green-400">
              <div className="flex items-center justify-between">
                <FaUserShield size={40} className="text-white" />
                <h2 className="font-semibold text-xl">Roles</h2>
              </div>
              <p className="mt-4">Assign roles and define permissions here.</p>
              <Link
                to="/roles"
                className="inline-block mt-4 px-6 py-2 rounded-lg bg-white text-green-500 font-semibold hover:bg-green-50 transition-all duration-200"
              >
                Go to Roles
              </Link>
            </div>

            {/* Permissions Card */}
            <div className="bg-purple-500 text-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out hover:bg-purple-400">
              <div className="flex items-center justify-between">
                <FaLock size={40} className="text-white" />
                <h2 className="font-semibold text-xl">Permissions</h2>
              </div>
              <p className="mt-4">Configure and customize app permissions here.</p>
              <Link
                to="/permissions"
                className="inline-block mt-4 px-6 py-2 rounded-lg bg-white text-purple-500 font-semibold hover:bg-purple-50 transition-all duration-200"
              >
                Go to Permissions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
