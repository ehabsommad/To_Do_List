import React from "react";
import Button from "../button/index";
import RowItem from "../Row-item/index";
import "./style.css";
import { FaRegTrashCan } from "react-icons/fa6";

function TodosCard() {
  return (
    <div className="card">
      <h3>Todo List</h3>
      <RowItem
        thead1={"List"}
        thead2={"Status"}
        thead3={"Close"}
        Header="thead"
      />
      <RowItem
        thead1={"Go to gym"}
        thead2={<Button text="pending" className={"bg-green"} />}
        thead3={<FaRegTrashCan className="icon" />}
      />
      <RowItem
        thead1={"Chech"}
        thead2={<Button text="Completed" className={"bg-green"} />}
        thead3={<FaRegTrashCan className="icon" />}
      />
      <RowItem
        thead1={"This"}
        thead2={<Button text="pending" className={"bg-green"} />}
        thead3={<FaRegTrashCan className="icon" />}
      />
    </div>
  );
}

export default TodosCard;
