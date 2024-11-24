import { Link } from "react-router-dom";

const Sidebar = () => (
  <nav>
    <ul>
      <li><Link to="/users">Users</Link></li>
      <li><Link to="/roles">Roles</Link></li>
      <li><Link to="/permissions">Permissions</Link></li>
    </ul>
  </nav>
);

export default Sidebar;
