import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import carsData from "../cars.json";
import toyotaCamry from "../assets/images/toyotaCamry.png";

function CarDetails({
  pickupDate: initialPickupDate,
  returnDate: initialReturnDate,
}) {
  const { carId } = useParams();
  const [car, setCar] = useState({});

  const pickupDate = new Date(initialPickupDate.replace(" at ", " "));
  const returnDate = new Date(initialReturnDate.replace(" at ", " "));

  function formatDate(date) {
    return date
      .toLocaleString("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      })
      .replace(",", " at");
  }

  useEffect(() => {
    fetch(`http://localhost:4000/api/cars/${carId}`)
      .then((response) => response.json())
      .then((data) => setCar(data))
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [carId]);

  const imgUrl = `http://localhost:4000/assets/cars/${car.image}`;

  const totalDays = Math.ceil(
    (returnDate - pickupDate) / (1000 * 60 * 60 * 24)
  );

  const totalPrice = totalDays * car.rent_per_day;

  return (
    <div className="car-info">
      <h3>Reservation Information</h3>
      <div className="car-data">
        <h4>
          {car.name + " " + car.model} {car.year} <span> or similar</span>
        </h4>
        <p>From {formatDate(initialPickupDate)}</p>
        <p>To {formatDate(initialReturnDate)}</p>
        <p className="days">
          Number of days: <span>{totalDays}</span>
        </p>
        <div className="img-container">
          <img src={imgUrl} alt="car" />
        </div>
        <div className="total-price">
          <p>Total Price:</p>
          <p>${totalPrice}</p>
        </div>
      </div>
    </div>
  );
}

export default CarDetails;
