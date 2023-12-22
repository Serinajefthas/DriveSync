import React from "react";
import Cars from "../pages/Cars";

function ManageFleet() {
  return (
    <div className="manage-fleet">
      <h2>ManageFleet</h2>
      <Cars dashboard={true} />
    </div>
  );
}

export default ManageFleet;
