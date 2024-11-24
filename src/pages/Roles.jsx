import React, { useState, useEffect } from "react";
import { useRolesContext } from "../context/RolesContext";
import RoleTable from "../components/RoleTable";
import Modal from "../components/Modal"; // Assuming you have a Modal component
import ConfirmationDialog from "../components/ConfirmationDialog"; // Add a reusable confirmation dialog

const Roles = () => {
  const { roles, fetchRoles, addRole, updateRole, deleteRole } = useRolesContext();
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [newRole, setNewRole] = useState("");
  const [editRole, setEditRole] = useState(null);
  const [roleToDelete, setRoleToDelete] = useState(null);

  useEffect(() => {
    fetchRoles();
  }, [fetchRoles]);

  const handleAddRole = () => {
    if (newRole.trim()) {
      addRole(newRole);
      setNewRole("");
      setIsAddModalOpen(false);
    }
  };

  const handleEditRole = (updatedRole) => {
    updateRole(updatedRole);
    setIsEditModalOpen(false);
  };

  const handleDeleteRole = () => {
    if (roleToDelete) {
      deleteRole(roleToDelete.id);
      setRoleToDelete(null);
      setIsDeleteDialogOpen(false);
    }
  };

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Manage Roles</h1>

      {/* Add Role Button */}
      <div className="mb-6 flex flex-wrap justify-between items-center gap-4">
        <button
          onClick={() => setIsAddModalOpen(true)}
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md text-sm sm:text-base"
        >
          Add New Role
        </button>
        <input
          type="text"
          placeholder="Search roles..."
          className="border border-gray-300 rounded-lg px-4 py-2 w-full sm:w-auto sm:max-w-xs"
          // Add search functionality here
        />
      </div>

      {/* Roles Table */}
      <RoleTable
        roles={roles}
        onEdit={(role) => {
          setEditRole(role);
          setIsEditModalOpen(true);
        }}
        onDelete={(role) => {
          setRoleToDelete(role);
          setIsDeleteDialogOpen(true);
        }}
      />

      {/* Add Role Modal */}
      {isAddModalOpen && (
        <Modal onClose={() => setIsAddModalOpen(false)}>
          <h2 className="text-xl font-bold mb-4">Add New Role</h2>
          <input
            type="text"
            value={newRole}
            onChange={(e) => setNewRole(e.target.value)}
            placeholder="Enter role name"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4 text-sm sm:text-base"
          />
          <div className="flex justify-end gap-2">
            <button
              onClick={handleAddRole}
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg shadow-md"
            >
              Add Role
            </button>
            <button
              onClick={() => setIsAddModalOpen(false)}
              className="bg-gray-300 hover:bg-gray-400 text-black px-6 py-2 rounded-lg shadow-md"
            >
              Cancel
            </button>
          </div>
        </Modal>
      )}

      {/* Edit Role Modal */}
      {isEditModalOpen && (
        <Modal onClose={() => setIsEditModalOpen(false)}>
          <h2 className="text-xl font-bold mb-4">Edit Role</h2>
          <input
            type="text"
            value={editRole?.name || ""}
            onChange={(e) =>
              setEditRole((prev) => ({ ...prev, name: e.target.value }))
            }
            placeholder="Enter role name"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4 text-sm sm:text-base"
          />
          <div className="flex justify-end gap-2">
            <button
              onClick={() => handleEditRole(editRole)}
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg shadow-md"
            >
              Save Changes
            </button>
            <button
              onClick={() => setIsEditModalOpen(false)}
              className="bg-gray-300 hover:bg-gray-400 text-black px-6 py-2 rounded-lg shadow-md"
            >
              Cancel
            </button>
          </div>
        </Modal>
      )}

      {/* Delete Confirmation Dialog */}
      {isDeleteDialogOpen && (
        <ConfirmationDialog
          title="Delete Role"
          message={`Are you sure you want to delete the role "${roleToDelete?.name}"?`}
          onConfirm={handleDeleteRole}
          onCancel={() => setIsDeleteDialogOpen(false)}
        />
      )}
    </div>
  );
};

export default Roles;
