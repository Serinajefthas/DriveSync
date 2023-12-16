import "../styles/BookingForm.css";
import DatetimePickerInput from "../components/DatetimePickerInput";
import ClientInfo from "../components/ClientInfo";
import { useState } from "react";

function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    phone: "",
    birthday: "",
    country: "",
    additionalOptions: "",
    pickupDate: new Date(),
    returnDate: new Date(new Date().getTime() + 24 * 60 * 60 * 1000),
  });

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
      pickupDate,
      returnDate,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section className="booking-form">
      <div className="container">
        <h2>Booking Form</h2>
        <form onSubmit={handleSubmit}>
          {/* Client Information */}
          <div className="driver">
            <ClientInfo onChange={handleInputChange} />

            {/* Datetime Picker */}
            <DatetimePickerInput onDatetimeChange={handleDatetimeChange} />
          </div>

          {/* Car Details Card */}
          <div>
            <h3>Car Details</h3>
            {/* Display car details, total price, or any other relevant information */}
          </div>

          {/* Submit Button */}
          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
}

export default BookingForm;
