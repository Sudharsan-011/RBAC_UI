import React, { useState } from "react";

const PermissionsForm = ({ onSubmit, initialPermissions = [] }) => {
  const [permissions, setPermissions] = useState(initialPermissions);

  const handlePermissionChange = (e, index) => {
    const updatedPermissions = [...permissions];
    updatedPermissions[index] = e.target.value;
    setPermissions(updatedPermissions);
  };

  const addPermission = () => {
    setPermissions([...permissions, ""]);
  };

  const removePermission = (index) => {
    const updatedPermissions = permissions.filter((_, i) => i !== index);
    setPermissions(updatedPermissions);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(permissions);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {permissions.map((permission, index) => (
        <div key={index} className="flex items-center">
          <input
            type="text"
            value={permission}
            onChange={(e) => handlePermissionChange(e, index)}
            className="border px-3 py-2 w-full"
            placeholder="Permission Name"
          />
          <button
            type="button"
            onClick={() => removePermission(index)}
            className="ml-2 bg-red-500 text-white px-3 py-1 rounded"
          >
            Remove
          </button>
        </div>
      ))}
      <button
        type="button"
        onClick={addPermission}
        className="bg-blue-500 text-white px-3 py-1 rounded"
      >
        Add Permission
      </button>
      <button type="submit" className="bg-green-500 text-white px-3 py-1 rounded">
        Save
      </button>
    </form>
  );
};

export default PermissionsForm;
