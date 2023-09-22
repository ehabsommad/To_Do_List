import React from "react";
import Button from "../button";
import "./style.css";
import { v4 as uuidv4 } from "uuid";

function InputCard({ onChange, value, data, setData, setValue }) {
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const newItem = () => {
    if (value.trim().length > 0) {
      const newObj = {
        title: value,
        completed: false,
        id: uuidv4(),
      };
      setData([newObj, ...data]);
      setValue("");
    }
  };
  return (
    <div className="card">
      <input
        value={value}
        onChange={handleChange}
        className="input-card"
        placeholder="What would you like to do ?"
      />
      <Button text="Add" className="bg-red" onClick={newItem} />
    </div>
  );
}

export default InputCard;
