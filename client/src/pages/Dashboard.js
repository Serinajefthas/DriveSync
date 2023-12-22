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

// <!-- Your HTML form -->
// <form action="/upload" method="post" enctype="multipart/form-data">
//   <!-- Input fields for car details -->
//   <label for="name">Name:</label>
//   <input type="text" name="name" required>

//   <label for="model">Model:</label>
//   <input type="text" name="model" required>

//   <label for="year">Year:</label>
//   <input type="number" name="year" required>

//   <label for="rent_per_day">Rent per Day:</label>
//   <input type="number" name="rent_per_day" required>

//   <!-- Input fields for specifications -->
//   <label for="number_of_doors">Number of Doors:</label>
//   <input type="number" name="number_of_doors" required>

//   <label for="number_of_people">Number of People:</label>
//   <input type="number" name="number_of_people" required>

//   <label for="transmission">Transmission:</label>
//   <input type="text" name="transmission" required>

//   <label for="number_of_bags">Number of Bags:</label>
//   <input type="number" name="number_of_bags" required>

//   <!-- Input field for image upload -->
//   <label for="image">Upload Image:</label>
//   <input type="file" name="image" accept="image/*" required>

//   <!-- Submit button -->
//   <button type="submit">Submit</button>
// </form>
