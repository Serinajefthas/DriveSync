import "../styles/BookingForm.css";
import DatetimePickerInput from "../components/DatetimePickerInput";
import ClientInfo from "../components/ClientInfo";
import { useState } from "react";
import CarDetails from "../components/CarDetails";

function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    phone: "",
    birthday: "",
    country: "",
    additionalOptions: "",
    pickupDate: formatDate(new Date()),
    returnDate: formatDate(
      new Date(new Date().getTime() + 24 * 60 * 60 * 1000)
    ),
  });

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

  const handleInputChange = (fieldName, event) => {
    const value = event.target.value;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [fieldName]: value,
    }));
  };

  const handleDatetimeChange = ({ pickupDate, returnDate }) => {
    if (returnDate <= pickupDate) {
      returnDate = new Date(pickupDate.getTime() + 24 * 60 * 60 * 1000);
    }
    setFormData((prevFormData) => ({
      ...prevFormData,
      pickupDate: formatDate(pickupDate),
      returnDate: formatDate(returnDate),
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch("http://localhost:4000/api/clients", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => {
        console.error("Error:", error);
      });

    console.log("Form submitted:", formData);
  };

  return (
    <section className="booking-form">
      <div className="container">
        <h2>Booking Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-info">
            {/* Client Information */}
            <div className="driver">
              <ClientInfo onChange={handleInputChange} />

              {/* Datetime Picker */}
              <DatetimePickerInput onDatetimeChange={handleDatetimeChange} />
            </div>

            {/* Car Details Card */}
            <div className="car-details">
              <CarDetails
                pickupDate={formData.pickupDate}
                returnDate={formData.returnDate}
              />
            </div>
          </div>

          {/* Submit Button */}
          <button className="btn-submit" type="submit">
            Book
          </button>
        </form>
      </div>
    </section>
  );
}

export default BookingForm;
