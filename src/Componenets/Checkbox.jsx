import React, { useState } from "react";

const Checkbox = ({ label, isChecked, onChange }) => {
  return (
    <label className="flex px-10 py-3 rounded-full bg-white w-40 text-black ml-10">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={onChange}
        className="form-checkbox text-indigo-600 h-5 mr-3"
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
    for (let i in days) {
      if (i === day) {
        days[i] = !days[i];
      } else {
        days[i] = false;
      }
    }
    setDays({ ...days });
  };

  return (
    <div className="flex gap-2 justify-around">
      <div className="flex flex-col gap-2">
        {Object.keys(days).map((day) => (
          <Checkbox
            key={day}
            label={day}
            isChecked={days[day]}
            onChange={() => handleCheckboxChange(day)}
          />
        ))}
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="flex justify-center items-center flex-col gap-5">
          <input
            type="text"
            className="h-12 w-48 text-black rounded text-center"
          />
          <button className="bg-white text-black py-1 px-5 rounded">
            Time Range
          </button>
        </div>
      </div>
    </div>
  );
};

export default WeekCheckbox;
