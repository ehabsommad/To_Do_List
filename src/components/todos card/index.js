import React from "react";
import Button from "../button/index";
import RowItem from "../Row-item/index";
import "./style.css";

function TodosCard({ data, setData }) {
  return (
    <div className="card">
      <h3>Todo List</h3>
      {data.map((item) => (
        <RowItem
          item={item}
          handelDelete={() => {
            const filtered = data.filter((el) => el.id !== item.id);
            setData(filtered);
          }}
        />
      ))}
    </div>
  );
}

export default TodosCard;
