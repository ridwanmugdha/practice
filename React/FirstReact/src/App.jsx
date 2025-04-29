import "./App.css";

function App() {
  return (
    <>
      <h1>Vite + React</h1>
      <Person />
      <Person />
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
