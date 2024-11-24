import React, { useState, useEffect } from "react";
import { usePermissionsContext } from "../context/PermissionsContext"; // Assuming PermissionsContext manages permissions
import { FaCheck, FaTimes } from "react-icons/fa"; // For adding icons to the buttons

const Permissions = () => {
  const { permissions, fetchPermissions, updatePermission, loading, error } = usePermissionsContext();
  const [selectedRole, setSelectedRole] = useState("");
  const [filteredPermissions, setFilteredPermissions] = useState([]);
  const [loadingPermissionId, setLoadingPermissionId] = useState(null); // Track which permission is being toggled

  // Fetch permissions when the component loads
  useEffect(() => {
    fetchPermissions();
  }, [fetchPermissions]);

  // Update filtered permissions based on selected role
  useEffect(() => {
    if (selectedRole) {
      const rolePermissions = permissions.filter(
        (permission) => permission.role === selectedRole
      );
      setFilteredPermissions(rolePermissions);
    } else {
      setFilteredPermissions(permissions);
    }
  }, [selectedRole, permissions]);

  const handleRoleChange = (e) => {
    setSelectedRole(e.target.value);
  };

  const togglePermission = async (permissionId) => {
    setLoadingPermissionId(permissionId);
    try {
      await updatePermission(permissionId); // Update the permission in the context
    } catch (error) {
      console.error("Error updating permission:", error);
    } finally {
      setLoadingPermissionId(null);
    }
  };

  if (loading) {
    return <div className="text-center text-lg">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-lg text-red-500">Error fetching permissions: {error}</div>;
  }

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-semibold text-center mb-8 text-gray-800">Manage Permissions</h1>

      {/* Role Filter */}
      <div className="mb-6 flex justify-between items-center">
        <label htmlFor="role-select" className="text-lg text-gray-700">
          Select a Role:
        </label>
        <select
          id="role-select"
          value={selectedRole}
          onChange={handleRoleChange}
          className="border border-gray-300 rounded-md p-2 w-40 text-gray-700"
        >
          <option value="">All Roles</option>
          <option value="Admin">Admin</option>
          <option value="Editor">Editor</option>
          <option value="Viewer">Viewer</option>
        </select>
      </div>

      {/* Permissions Table */}
      <div className="overflow-x-auto bg-white rounded-lg shadow-md">
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Permission Name</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Assigned Role</th>
              <th className="px-6 py-3 text-center text-sm font-medium text-gray-700">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredPermissions.map((permission) => (
              <tr key={permission.id} className="hover:bg-gray-50">
                <td className="border px-6 py-3">{permission.name}</td>
                <td className="border px-6 py-3">{permission.role}</td>
                <td className="border px-6 py-3 text-center">
                  <button
                    onClick={() => togglePermission(permission.id)}
                    className={`px-4 py-2 rounded-md text-sm font-semibold transition-all duration-200 ease-in-out 
                      ${permission.enabled ? 'bg-green-500 hover:bg-green-600 text-white' : 'bg-red-500 hover:bg-red-600 text-white'}`}
                    disabled={loadingPermissionId === permission.id}
                    aria-label={permission.enabled ? "Disable permission" : "Enable permission"}
                  >
                    {loadingPermissionId === permission.id ? (
                      <div className="spinner"></div> // Add a spinner component here for loading
                    ) : (
                      <>
                        {permission.enabled ? <FaCheck className="inline mr-2" /> : <FaTimes className="inline mr-2" />}
                        {permission.enabled ? "Enabled" : "Disabled"}
                      </>
                    )}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Permissions;
