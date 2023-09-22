import React from "react";
import "./style.css";

function Button({ text, type, className, onClick }) {
  return (
    // <div className={`btn ${type === "add" ? "bg-red" : "bg-green"}`}>
    <div className={`btn  ${className}`} onClick={onClick}>
      {text}
    </div>
  );
}

export default Button;
