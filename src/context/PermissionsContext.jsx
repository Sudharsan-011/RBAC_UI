import React, { createContext, useState, useEffect, useContext, useCallback } from "react";

// Create Context
export const PermissionsContext = createContext();

// Provider Component
const PermissionsProvider = ({ children }) => {
  const [permissions, setPermissions] = useState([]); // List of permissions
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(null); // Error state

  // Fetch permissions (can be an API call or mock data)
  const fetchPermissions = useCallback(() => {
    setLoading(true);
    setError(null);
    // Simulating an API call or data fetch
    setTimeout(() => {
      try {
        const fetchedPermissions = [
          { id: 1, name: "Edit Posts", role: "Admin", enabled: true },
          { id: 2, name: "View Posts", role: "Viewer", enabled: false },
          { id: 3, name: "Delete Posts", role: "Editor", enabled: true },
        ];
        setPermissions(fetchedPermissions);
      } catch (err) {
        setError("Failed to fetch permissions");
      } finally {
        setLoading(false);
      }
    }, 1000);
  }, []);

  // Add a permission function
  const addPermission = useCallback((permission) => {
    setPermissions((prevPermissions) => [...prevPermissions, permission]);
  }, []);

  // Remove a permission function
  const removePermission = useCallback((permissionId) => {
    setPermissions((prevPermissions) =>
      prevPermissions.filter((permission) => permission.id !== permissionId)
    );
  }, []);

  // Fetch permissions when the component mounts
  useEffect(() => {
    fetchPermissions();
  }, [fetchPermissions]);

  return (
    <PermissionsContext.Provider
      value={{
        permissions,
        loading,
        error,
        fetchPermissions,
        addPermission,
        removePermission,
      }}
    >
      {children}
    </PermissionsContext.Provider>
  );
};

// Custom hook for using PermissionsContext
export const usePermissionsContext = () => {
  return useContext(PermissionsContext);
};

export default PermissionsProvider;
