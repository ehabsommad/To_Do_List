import React from "react";
import Button from "../button";
import "./style.css";

function InputCard({ onchange, value }) {
  return (
    <div className="card">
      <input
        value={value}
        onChange={onchange}
        className="input-card"
        placeholder="What would you like to do ?"
      />
      <Button text="Add" className="bg-red" />
    </div>
  );
}

export default InputCard;
