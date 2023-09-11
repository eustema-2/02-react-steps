import { useState } from "react";

const messages = ["Primo Step 😊", "Secondo Step 😎", "Terzo Step 🖖"];

export default function App() {
  // Creo lo stato reattivo
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    if (step > 1) {
      setStep(step - 1);
    }
  }

  function handleNext() {
    if (step < messages.length) {
      setStep(function (cStep) {
        return cStep + 1;
      });
    }
  }

  // function toggleVisibility() {
  //   setIsOpen((currentIsOpen) => !currentIsOpen);
  // }

  return (
    <div>
      <button
        className="close"
        onClick={() => setIsOpen((currentIsOpen) => !currentIsOpen)}
      >
        ❌
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={`${step >= 1 ? "active" : ""}`}>1</div>
            <div className={`${step >= 2 ? "active" : ""}`}>2</div>
            <div className={`${step >= 3 ? "active" : ""}`}>3</div>
          </div>

          <p className="message">{messages[step - 1]}</p>

          <div className="buttons">
            <button onClick={handlePrevious}>Previous</button>
            <button onClick={handleNext}>Next</button>
          </div>
        </div>
      )}
    </div>
  );
}
