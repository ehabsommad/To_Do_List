import React from "react";
import "./style.css";

function Button({ text, type, className }) {
  return (
    // <div className={`btn ${type === "add" ? "bg-red" : "bg-green"}`}>
    <div className={`btn  ${className}`}>{text}</div>
  );
}

export default Button;
