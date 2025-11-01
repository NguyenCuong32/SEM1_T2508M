import { useState } from "react";
const messages = ["Login ⚛️", "Order item 💼", "Payment order ", "Done"];
function App() {
  // var step = 1;
  const [step, setStep] = useState(1);
 const [isOpen,setOpen] = useState(true);
  function handlePrevious() {
    setStep((s)=>s-1);
    if (step < 0) {
      setStep(1);
    }
  }
  function handleNext() {
    setStep((s)=>s+1);
    if (step > 3) {
      setStep(4);
    }
  }
  function handleClose()
  {
    setOpen(!isOpen);
  }

  return (
    <div>
      <button className="close" onClick={handleClose}>&times;</button>
      {isOpen&&
        <div className="steps">
        <div className="numbers">
          <div className={`${step >= 1 ? "active" : ""}`}>1</div>
          <div className={`${step >= 2 ? "active" : ""}`}>2</div>
          <div className={`${step >= 3 ? "active" : ""}`}>3</div>
          <div className={`${step >= 4 ? "active" : ""}`}>4</div>
        </div>

        <div className="message">
          <p>{messages[step - 1]}</p>
        </div>
        <div className="button">
          <button onClick={handlePrevious}>Previous</button>
          <button onClick={handleNext}>Next</button>
        </div>
      </div>
      }
    
    </div>
  );
}

export default App;
