// DatetimePickerInput.js
import React, { useEffect, useState } from "react";
import DatetimePicker from "./DatetimePicker";
import "../styles/DatetimePickerInput.css";
import "react-datetime-picker/dist/DateTimePicker.css";
import "react-calendar/dist/Calendar.css";

const DatetimePickerInput = ({ onDatetimeChange }) => {
  const [pickupDate, setPickupDate] = useState(new Date());
  const [returnDate, setReturnDate] = useState(new Date());

  const handlePickupDateChange = (date) => {
    setPickupDate(date);
    // Update return date options
    setReturnDate(new Date(date.getTime() + 24 * 60 * 60 * 1000));
    onDatetimeChange({ pickupDate: date, returnDate });
  };

  const handleReturnDateChange = (date) => {
    setReturnDate(date);
    onDatetimeChange({ pickupDate, returnDate: date });
  };

  const minReturnDate = new Date(pickupDate);
  minReturnDate.setDate(minReturnDate.getDate() + 1);

  useEffect(() => {
    onDatetimeChange({ pickupDate, returnDate });
  }, []);

  return (
    <div className="datetime-picker-input-container">
      <div className="datetime-picker-label">
        <label>Pickup Date:</label>
      </div>
      <div className="datetime-picker">
        <DatetimePicker
          format="y-MM-dd h:mm a"
          minDate={new Date()}
          onChange={handlePickupDateChange}
        />
      </div>

      <div className="datetime-picker-label">
        <label>Return Date:</label>
      </div>
      <div className="datetime-picker">
        <DatetimePicker
          format="y-MM-dd h:mm a"
          minDate={minReturnDate}
          onChange={handleReturnDateChange}
        />
      </div>
    </div>
  );
};

export default DatetimePickerInput;
