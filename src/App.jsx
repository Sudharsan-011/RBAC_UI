import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";  // Import Navigate
import GlobalStateProvider from "./context/GlobalStateProvider";
import {AuthProvider, useAuthContext } from "./context/AuthContext";  // AuthProvider directly used here
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Roles from "./pages/Roles";
import Permissions from "./pages/Permissions";
import "./styles/tailwind.css";
import {RolesProvider} from "./context/RolesContext";

// Route Protection component
const ProtectedRoute = ({ element, ...rest }) => {
  const { user } = useAuthContext();  // Get the logged-in user from context

  if (!user) {
    // Redirect to login or another page if not logged in
    return <Navigate to="/" replace />;
  }

  return element;
};

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
    <AuthProvider>  {/* Wrap with AuthProvider to provide context */}
      <GlobalStateProvider>
        <RolesProvider>
        <Router>
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

