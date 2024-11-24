# React + Vite
# RBAC UI

This is a Role-Based Access Control (RBAC) UI application built with React, designed to manage users, roles, and permissions. The app allows administrators to create, update, and delete roles and assign permissions to them. It also supports user management and provides a dashboard to view all the roles, users, and permissions.

The application uses Tailwind CSS for styling and React Context API for state management. It communicates with a backend through API calls (which can be mocked during development).

---

## Project Structure

### `rbac-ui/`
The frontend of the application built with React.

#### `public/`
- **index.html**: The main HTML file.
- **assets/**: Static assets like images, fonts, etc.

#### `src/`
- **components/**: Reusable components for UI.
  - **Header.js**: App header (navigation, branding, etc.).
  - **Sidebar.js**: Sidebar component (for admin dashboard).
  - **UserTable.js**: Displays users in a table format.
  - **RoleTable.js**: Displays roles in a table format.
  - **PermissionsForm.js**: Allows editing/assigning permissions.
  - **Modal.js**: Generic modal for adding/editing users or roles.
  
- **context/**: Context-related files for global state management.
  - **AuthContext.js**: Context for authentication (user login state).
  - **RolesContext.js**: Context for managing roles.
  - **PermissionsContext.js**: Context for managing permissions.
  - **GlobalStateProvider.js**: Provider component that wraps the app and provides contexts.

- **pages/**: Page components for each section of the app.
  - **Dashboard.js**: Dashboard page with user, role, and permission management.
  - **Users.js**: User management page.
  - **Roles.js**: Role management page.
  - **Permissions.js**: Permissions management page.

- **services/**: API calls and mock API simulations.
  - **api.js**: Axios API calls (CRUD operations for users, roles, etc.).
  - **mockApi.js**: Mock API for simulating backend calls (optional).

- **styles/**: Styles for the app.
  - **tailwind.config.js**: Tailwind CSS configuration.
  - **globals.css**: Global styles (optional).

- **App.js**: Main App component (global layout and routing).
- **index.js**: Entry point for React app.
- **setupTests.js**: Test setup (if using Jest/Testing Library).

---

## Getting Started

### Prerequisites

- **Node.js** (v14.x or later)
- **npm** or **yarn**

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Sudharsan-011/rbac-ui.git
   cd rbac-ui


This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
# RBAC_UI
