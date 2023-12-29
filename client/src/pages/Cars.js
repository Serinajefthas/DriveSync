import { useState, useEffect } from "react";
import Car from "../components/Car";
import "../styles/Cars.css";

// import carsData from "../cars.json";

function Cars({ dashboard }) {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/cars")
      .then((response) => response.json())
      .then((data) => setCars(data))
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);
  return (
    <section className="cars">
      <div className="container">
        <div className="cars-list">
          {cars.map((car) => (
            <Car key={car._id} car={car} dashboard={dashboard} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Cars;
