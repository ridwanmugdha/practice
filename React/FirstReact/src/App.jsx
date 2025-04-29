import "./App.css";
import Todo from "./Todo.jsx";

function App() {
  return (
    <>
      <h1>Vite + React</h1>

      <ul>
        <Todo name="Learn More"></Todo>
      </ul>
    </>
  );
}

function Person() {
  const name = "John Doe";
  return (
    <div className="justify-center flex flex-col items-center">
      <h1>Person</h1>
      <p className="bg-red-500 text-6xl">My name is {name}</p>
    </div>
  );
}

export default App;
