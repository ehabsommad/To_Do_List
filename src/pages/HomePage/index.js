import axios from "axios";
import React, { useEffect, useState } from "react";
import InputCard from "../../components/InputCard";
import TodosCard from "../../components/todos card";
import "./style.css";

function HomePage() {
  const [value, setValue] = useState("");
  const [data, setData] = useState([]);

  console.log(value, "value");

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos"
      );
      setData(response.data.slice(0, 30));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <InputCard
        value={value}
        setData={setData}
        data={data}
        setValue={setValue}
      />
      <TodosCard data={data} setData={setData} />
    </>
  );
}

export default HomePage;
