import React, { useEffect, useState } from "react";
import DateTimePicker from "react-datetime-picker";

const DatetimePicker = ({ format, minDate, step, onChange }) => {
  const [value, setValue] = useState(new Date());

  // useEffect(() => {
  //   console.log(value);
  // }, [value]);

  const handleChange = (date) => {
    setValue(date);
    onChange(date);
  };

  return (
    <DateTimePicker
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
