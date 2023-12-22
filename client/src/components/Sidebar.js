import { Link } from "react-router-dom";
import "../styles/Sidebar.css";

function Sidebar() {
  return (
    <>
      <h1>CarRental System</h1>
      <ul className="list-unstyled">
        <li className="nav-item">
          <Link to="/dashboard" className="nav-link">
            <span>Dashboard</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/dashboard/manage-fleet" className="nav-link">
            Manage Fleet
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/dashboard/clients" className="nav-link">
            Clients
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/dashboard/settings" className="nav-link">
            Settings
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/dashboard/logout" className="nav-link">
            Logout
          </Link>
        </li>
      </ul>
    </>
  );
}

export default Sidebar;
