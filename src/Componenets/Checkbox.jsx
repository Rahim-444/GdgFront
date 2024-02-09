import React, { useState } from "react";

const Checkbox = ({ label, isChecked, onChange }) => {
  return (
    <label className="flex items-center space-x-2">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={onChange}
        className="form-checkbox text-indigo-600 h-5 w-5"
      />
      <span>{label}</span>
    </label>
  );
};

const WeekCheckbox = () => {
  const [days, setDays] = useState({
    sunday: false,
    monday: false,
    tuesday: false,
    wednesday: false,
    thursday: false,
    friday: false,
    saturday: false,
  });

  const handleCheckboxChange = (day) => {
    setDays((prevDays) => ({
      ...prevDays,
      [day]: !prevDays[day],
    }));
  };

  return (
    <div className="flex flex-wrap space-x-4">
      {Object.keys(days).map((day) => (
        <Checkbox
          key={day}
          label={day}
          isChecked={days[day]}
          onChange={() => handleCheckboxChange(day)}
        />
      ))}
    </div>
  );
};

export default WeekCheckbox;
