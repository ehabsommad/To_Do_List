import "./App.css";
import Button from "./components/button";
import InputCard from "./components/InputCard";
import TodosCard from "./components/todos card";

function App() {
  return (
    <div className="container">
      {/* <Button text={"Add"} className="bg-green" /> */}
      <InputCard />
      <TodosCard />
    </div>
  );
}

export default App;
