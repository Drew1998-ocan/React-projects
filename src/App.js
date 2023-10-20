import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  // const step = 1;
  const [step, setStep] = useState(1);

  const previousClick = () => {
    return setStep(step - 1);
  };
  const nextClick = () => {
    console.log(messages.length);
    const n = messages.length;
    if (step <= n) {
      setStep(step + 1);
    } else {
    }
  };

  return (
    <div className="steps">
      <div className="numbers">
        <div className={`${step >= 1 ? "active" : ""}`}>1</div>
        <div className={`${step >= 2 ? "active" : ""}`}>2</div>
        <div className={`${step >= 3 ? "active" : ""}`}>3</div>
      </div>
      <div className="message">
        step : {step} {messages[step - 1]}
      </div>
      <div className="buttons">
        {}
        <button
          onClick={previousClick}
          style={{ backgroundColor: "#7950F2", color: "#fff" }}
        >
          previous
        </button>
        {step <= messages.length - 1 ? (
          <button
            onClick={nextClick}
            style={{ backgroundColor: "#7950F2", color: "#fff" }}
          >
            next
          </button>
        ) : (
          <button
            disabled
            style={{ backgroundColor: "#C2D9FF", color: "#fff" }}
          >
            next
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
