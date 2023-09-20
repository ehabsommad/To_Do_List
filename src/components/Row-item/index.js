import React from "react";
import "./style.css";
function RowItem({ thead1, thead2, thead3, Header }) {
  return (
    <table className={`${Header ? "thead" : "tbody"}`}>
      <tr>
        <td>{thead1}</td>
        <td>{thead2}</td>
        <td>{thead3}</td>
      </tr>
    </table>
  );
}

export default RowItem;
