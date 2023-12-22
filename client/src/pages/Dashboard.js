import { Route, Routes } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import "../styles/Dashboard.css";
import DashboardWelcome from "../components/DashboardWelcome";
import ManageFleet from "../components/ManageFleet";

function Dashboard() {
  return (
    <>
      <div className="row">
        <div className="col-2 sidebar">
          <Sidebar />
        </div>
        <div className="dashboard col-10 content">
          <div className="admin">
            <h2>Hello Admin</h2>
          </div>
          <Routes>
            <Route path="/" element={<DashboardWelcome />} index />
            <Route path="/manage-fleet" element={<ManageFleet />} />
            {/* <Route path="/reservations" element={<ReservationInfo />} />
        <Route path="/settings" element={<AccountSettings />} /> */}
          </Routes>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
