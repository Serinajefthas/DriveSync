import React, { useState } from "react";
import DateTimePickerComponent from "react-datetime-picker";

const DatetimePicker = ({ format, minDate, step, onChange }) => {
  const [value, setValue] = useState(new Date());

  const handleChange = (date) => {
    setValue(date);
    onChange(date);
  };

  return (
    <DateTimePickerComponent
      format={format}
      minDate={minDate}
      step={step}
      onChange={handleChange}
      value={value}
      className="my-datetime-picker"
    />
  );
};

export default DatetimePicker;
