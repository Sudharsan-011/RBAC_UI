import React from "react";

const UserTable = ({ users }) => {
  return (
    <table className="min-w-full bg-white border">
      <thead>
        <tr>
          <th className="py-2 px-4 border-b">ID</th>
          <th className="py-2 px-4 border-b">Name</th>
          <th className="py-2 px-4 border-b">Email</th>
          <th className="py-2 px-4 border-b">Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td className="py-2 px-4 border-b">{user.id}</td>
            <td className="py-2 px-4 border-b">{user.name}</td>
            <td className="py-2 px-4 border-b">{user.email}</td>
            <td className="py-2 px-4 border-b">
              <button className="bg-green-500 hover:bg-green-400 text-white px-3 py-1 rounded">
                Edit
              </button>
              <button className="bg-red-500 hover:bg-red-400 text-white px-3 py-1 rounded ml-2">
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
