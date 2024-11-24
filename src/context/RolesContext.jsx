import React, { createContext, useContext, useState } from "react";
import {
  fetchRolesFromMockApi,
  addRoleToMockApi,
  updateRoleInMockApi,
  deleteRoleFromMockApi,
} from "../services/mockApi";

const RolesContext = createContext();

export const RolesProvider = ({ children }) => {
  const [roles, setRoles] = useState([]);

  const fetchRoles = async () => {
    const data = await fetchRolesFromMockApi();
    setRoles(data);
  };

  const addRole = async (roleName) => {
    await addRoleToMockApi(roleName);
    fetchRoles(); // Refresh roles
  };

  const updateRole = async (updatedRole) => {
    await updateRoleInMockApi(updatedRole);
    fetchRoles(); // Refresh roles
  };

  const deleteRole = async (id) => {
    await deleteRoleFromMockApi(id);
    fetchRoles(); // Refresh roles
  };

  return (
    <RolesContext.Provider
      value={{ roles, fetchRoles, addRole, updateRole, deleteRole }}
    >
      {children}
    </RolesContext.Provider>
  );
};

export const useRolesContext = () => useContext(RolesContext);

// import React, { createContext, useContext, useState, useEffect, useCallback } from "react";

// // Create Context
// export const RolesContext = createContext();

// // Provider Component
// const RolesProvider = ({ children }) => {
//   const [roles, setRoles] = useState([]); // List of roles
//   const [loading, setLoading] = useState(false); // Loading state
//   const [error, setError] = useState(null); // Error state

//   // Fetch roles from an API
//   const fetchRoles = useCallback(async () => {
//     setLoading(true);
//     setError(null);
//     try {
//       const response = await fetch("/api/roles");
//       if (!response.ok) throw new Error("Failed to fetch roles");
//       const data = await response.json();
//       setRoles(data); // Set the roles to state
//     } catch (error) {
//       setError("Error fetching roles: " + error.message);
//     } finally {
//       setLoading(false);
//     }
//   }, []);

//   // Add a role function
//   const addRole = useCallback((role) => {
//     setRoles((prevRoles) => [...prevRoles, role]);
//   }, []);

//   // Remove a role function
//   const removeRole = useCallback((roleId) => {
//     setRoles((prevRoles) => prevRoles.filter(role => role.id !== roleId));
//   }, []);

//   // Fetch roles when the component mounts
//   useEffect(() => {
//     fetchRoles();
//   }, [fetchRoles]);

//   return (
//     <RolesContext.Provider value={{ roles, loading, error, fetchRoles, addRole, removeRole }}>
//       {children}
//     </RolesContext.Provider>
//   );
// };

// // Custom hook for using RolesContext
// export const useRolesContext = () => {
//   return useContext(RolesContext);
// };

// export default RolesProvider;
