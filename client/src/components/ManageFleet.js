import React from "react";
import Cars from "../pages/Cars";
import { Link } from "react-router-dom";

function ManageFleet() {
  return (
    <div className="manage-fleet">
      <h2>ManageFleet</h2>
      <Link to="/dashboard/manage-fleet/add-car" className="btn btn-primary">
        Add Car
      </Link>
      <Cars dashboard={true} />
    </div>
  );
}

export default ManageFleet;
