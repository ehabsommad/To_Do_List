import React, { useState } from "react";
import Button from "../button";
import { FaRegTrashCan } from "react-icons/fa6";
import "./style.css";

function RowItem({ item, Header, handleDelete }) {
  const [status, setStatus] = useState(item.completed);

  const handleStatus = () => {
    if (item.completed === false) {
      setStatus(true);
    }
  };
  return (
    <table className={`${Header ? "thead" : "tbody"}`}>
      <tr key={item.id}>
        <td>{item.title}</td>
        <td>
          {
            <Button
              onClick={handleStatus}
              className={status ? "bg-green" : "bg-red"}
              text={status ? "Completed" : "Pending"}
            />
          }
        </td>
        <td onClick={handleDelete}>
          {<FaRegTrashCan color={"#e63946"} cursor={"pointer"} />}
        </td>
      </tr>
    </table>
  );
}
export default RowItem;
