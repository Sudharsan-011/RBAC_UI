import React, { createContext, useState, useEffect, useContext } from "react";
import { fetchUsers as fetchUsersApi, addUser as addUserApi, deleteUser as deleteUserApi } from "../services/mockApi"; 

export const AuthContext = createContext();

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // Fetch users on mount
  useEffect(() => {
    setLoading(true);
    fetchUsersApi()
      .then((data) => {
        setUsers(data);
        setError(null);
      })
      .catch((err) => setError("Failed to fetch users: " + err.message))
      .finally(() => setLoading(false));
  }, []);

  // Add user function
  const addUser = (newUser) => {
    setLoading(true);
    setError(null);
    addUserApi(newUser)
      .then((addedUser) => {
        setUsers((prevUsers) => [...prevUsers, addedUser]);
      })
      .catch((err) => setError("Failed to add user: " + err.message))
      .finally(() => setLoading(false));
  };

  // Delete user function
  const deleteUser = (userId) => {
    setLoading(true);
    setError(null);
    deleteUserApi(userId)
      .then(() => {
        setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
      })
      .catch((err) => setError("Failed to delete user: " + err.message))
      .finally(() => setLoading(false));
  };

  return (
    <AuthContext.Provider value={{ users, error, loading, addUser, deleteUser }}>
      {children}
    </AuthContext.Provider>
  );
};

// import React, { createContext, useState, useEffect, useContext } from "react";
// import { fetchUsers, addUser, deleteUser } from "../services/mockApi"; // Import mock API

// export const AuthContext = createContext();

// export const useAuthContext = () => {
//   return useContext(AuthContext);
// };

// export const AuthProvider = ({ children }) => {
//   const [users, setUsers] = useState([]);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     setLoading(true);
//     fetchUsers()
//       .then((data) => {
//         setUsers(data);
//         setError(null);
//       })
//       .catch((err) => setError("Failed to fetch users: " + err.message))
//       .finally(() => setLoading(false));
//   }, []);

//   const addUser = (newUser) => {
//     setLoading(true);
//     setError(null);
//     addUser(newUser)
//       .then((addedUser) => {
//         setUsers((prevUsers) => [...prevUsers, addedUser]);
//       })
//       .catch((err) => setError("Failed to add user: " + err.message))
//       .finally(() => setLoading(false));
//   };

//   const deleteUser = (userId) => {
//     setLoading(true);
//     setError(null);
//     deleteUser(userId)
//       .then(() => {
//         setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
//       })
//       .catch((err) => setError("Failed to delete user: " + err.message))
//       .finally(() => setLoading(false));
//   };

//   return (
//     <AuthContext.Provider value={{ users, error, loading, addUser, deleteUser }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export default AuthProvider;
