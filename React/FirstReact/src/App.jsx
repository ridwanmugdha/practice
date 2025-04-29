import "./App.css";

function App() {
  return (
    <>
      <h1>Vite + React</h1>
      <Person></Person>
    </>
  );
}

function Person() {
  const name = "John Doe";
  const age = 32;
  return (
    <>
      <h1>Person</h1>
      <p>
        My name is {name} and age: {age}
      </p>
    </>
  );
}

export default App;
