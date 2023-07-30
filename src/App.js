import React from "react";
import { useState } from "react";

function App(props) {
  const [count, setCount] = useState(0);
  console.log("App render");
  return (
    <div className="App">
      <header className="App-header">{props.kulli}</header>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default App;
