import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import GlobalStateProvider from "./context/GlobalStateProvider";
import { AuthProvider, useAuthContext } from "./context/AuthContext";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Roles from "./pages/Roles";
import Permissions from "./pages/Permissions";
import "./styles/tailwind.css";
import { RolesProvider } from "./context/RolesContext";

// Route Protection component
const ProtectedRoute = ({ element, ...rest }) => {
  const { user } = useAuthContext();

  if (!user) {
    return <Navigate to="/" replace />;
  }

  return element;
};

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
      <AuthProvider>
        <GlobalStateProvider>
          <RolesProvider>
            <Router basename="/RBAC_UI/"> {/* Set the base URL for routing */}
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/users" element={<Users />} />
                <Route path="/roles" element={<Roles />} />
                <Route path="/permissions" element={<Permissions />} />
              </Routes>
            </Router>
          </RolesProvider>
        </GlobalStateProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
