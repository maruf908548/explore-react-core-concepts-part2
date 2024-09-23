import "./App.css";
import Counter from "./Counter";
import Team from "./Team";
import Users from "./Users";
import Friends from "./Freinds";

function App() {
  function handleClick() {
    alert("Button clicked");
  }
  const handleClick2 = () => {
    alert("Button clicked2");
  };
  const addToFive = (num) => {
    alert(num + 5);
  };
  return (
    <>
      <h3>Vite + React</h3>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>

      <Counter></Counter>

      {/* <button onclick="handleClick()">Click Me</button> */}
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click Me2</button>
      <button
        onClick={() => {
          alert("clicked");
        }}
      >
        Third
      </button>
      {/* Vejailla */}
      <button
        onClick={() => {
          addToFive(3);
        }}
      >
        Four
      </button>
    </>
  );
}

export default App;
