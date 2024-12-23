import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <section className="card">
        <p>Insanity is doing the same thing and expecting a different result</p>

        <i>Twitter</i>
        <i>Tumbler</i>
        <button>Next Quote</button>
      </section>
    </>
  );
}

export default App;
