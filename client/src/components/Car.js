import "../styles/Car.css";
import toyota from "../assets/images/toyotaCamry.png";
import { Link } from "react-router-dom";

function Car(props) {
  const {
    id,
    image,
    name,
    model,
    rent_per_day,
    specifications: {
      number_of_doors,
      number_of_people,
      transmission,
      number_of_bags,
    },
  } = props.car;
  return (
    <div className="car">
      <div className="car-image">
        <img src={toyota} alt="car" />
      </div>
      <div className="car-details">
        <div className="car-title">
          <h3>{name}</h3>
          <p>{model}</p>
        </div>
        <div className="car-features">
          <div className="car-feature">
            <ion-icon name="people-outline"></ion-icon>
            <span>{number_of_people} People</span>
          </div>
          <div className="car-feature">
            <svg
              style={{ width: "20px" }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                fill="#03A9F4"
                d="M4,12 L4,15.0618497 C6.92857572,15.4259858 9.40020388,17.3649874 9.90557056,20 L20,20 L20,12 L4,12 Z M4.61803399,10 L20,10 L20,4 L7.61803399,4 L4.61803399,10 Z M2,10.763932 L6.38196601,2 L22,2 L22,22 L8,22 L8,21 C8,18.7817414 5.70918967,17 3,17 L2,17 L2,10.763932 Z M7,15 L7,13 L10,13 L10,15 L7,15 Z"
              ></path>
            </svg>
            <span>{number_of_doors} Doors</span>
          </div>
          <div className="car-feature">
            <ion-icon name="hardware-chip-outline"></ion-icon>
            <span>{transmission}</span>
          </div>
          <div className="car-feature">
            <ion-icon name="bag-handle-outline"></ion-icon>
            <span>{number_of_bags} Bags</span>
          </div>
        </div>
        <div className="car-price">
          <p className="price">
            <strong>${rent_per_day}</strong> / day
          </p>
          <Link to={"bookingform/" + id} className="btn btn-primary">
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Car;
