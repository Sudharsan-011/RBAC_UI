import React from "react";

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">RBAC Management</h1>
      <div>
        <button className="bg-blue-800 hover:bg-blue-700 px-4 py-2 rounded">
          Logout
        </button>
      </div>
    </header>
  );
};

export default Header;
