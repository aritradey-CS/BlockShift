import { useState } from "react";
import "./App.css";

function App() {
  const slots = useState(Array.from(new Array(100), (v, i) => i))[0];
  const [active, setActive] = useState(0);

  const getCurrentRow = () => {
    if (active >= 0 && active <= 9) return 1;
    if (active >= 10 && active <= 19) return 2;
    if (active >= 20 && active <= 29) return 3;
    if (active >= 30 && active <= 39) return 4;
    if (active >= 40 && active <= 49) return 5;
    if (active >= 50 && active <= 59) return 6;
    if (active >= 60 && active <= 69) return 7;
    if (active >= 70 && active <= 79) return 8;
    if (active >= 80 && active <= 89) return 9;
    if (active >= 90 && active <= 99) return 10;
    return 0;
  };

  const leftHandler = () => {
    const currentRow = getCurrentRow(); // 1
    const minPos = currentRow * 10 - 10; // 1*10 -10 = 0 -> min
    if (active === minPos) return;
    setActive((prev) => prev - 1);
  };

  const rightHandler = () => {
    const currentRow = getCurrentRow(); // 1
    const maxPos = currentRow * 10 - 1; // 1*10 -1 = 9 -> max
    if (active === maxPos) return;
    setActive((prev) => prev + 1);
  };

  const downHandler = () => {
    const currentRow = getCurrentRow();
    if (currentRow === 10) return;
    setActive((prev) => prev + 10);
  };

  const upHandler = () => {
    const currentRow = getCurrentRow();
    if (currentRow === 1) return;
    setActive((prev) => prev - 10);
  };

  return (
    <main>
      <div className="parent">
        <button className="button-up" onClick={upHandler}>
          UP
        </button>

        <div className="area">
          {slots.map((sl) => (
            <div
              className={`box ${sl === active ? "active" : ""}`}
              key={sl}
            ></div>
          ))}
        </div>

        <button className="button-down" onClick={downHandler}>
          Down
        </button>
        <button className="button-left" onClick={leftHandler}>
          Left
        </button>
        <button className="button-right" onClick={rightHandler}>
          Right
        </button>
      </div>
          
    </main>
  );
}

export default App;
