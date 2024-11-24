import React, { memo } from "react";
import {AuthProvider} from "./AuthContext";
import {RolesProvider} from "./RolesContext";
import PermissionsProvider from "./PermissionsContext";

// GlobalStateProvider component that wraps its children with the required contexts
const GlobalStateProvider = ({ children }) => {
  const providers = [
    AuthProvider,
    RolesProvider,
    PermissionsProvider,
  ];

  // Return the nested providers in a more readable format
  return providers.reduce(
    (acc, Provider) => <Provider>{acc}</Provider>,
    children
  );
};

export default memo(GlobalStateProvider);  // Optional memoization for performance
