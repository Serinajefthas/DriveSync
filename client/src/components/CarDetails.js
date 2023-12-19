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
    if (carId > carsData.length) {
      return;
    }
    const carById = carsData.find((car) => car.id === +carId);
    setCar(carById);
  }, [carId]);

  // Calculate the total number of rental days
  const totalDays = Math.ceil(
    (returnDate - pickupDate) / (1000 * 60 * 60 * 24)
  );

  // Calculate the total price
  const totalPrice = totalDays * car.rent_per_day;

  return (
    <div className="car-info">
      <h3>Reservation Information</h3>
      <div className="car-data">
        <h4>
          {car.name} {car.model} <span> or similar</span>
        </h4>
        <p>From {formatDate(initialPickupDate)}</p>
        <p>To {formatDate(initialReturnDate)}</p>
        <p className="days">
          Number of days: <span>{totalDays}</span>
        </p>
        <div className="img-container">
          <img src={toyotaCamry} alt="car" />
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
