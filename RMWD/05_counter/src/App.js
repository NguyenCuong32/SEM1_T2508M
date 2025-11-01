import "./App.css";
import { useState } from "react";

function Couter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  return (
    <div className="counter">
      <div className="steps">
        <div className="btnGroup">
          <button onClick={() => setStep((s) => s - 1)}>-</button>
          <span>Steps</span>
          <button onClick={() => setStep((s) => s + 1)}>+</button>
          <p>Step: {step} </p>
        </div>
      </div>
      <div className="values">
        <div className="btnGroup">
          <button onClick={() => {setCount((c) => c - step);}}> - </button>
          <span>Values</span>
          <button onClick={() => { setCount((c) => c + step);}}> +</button>
          <p>Value: {count}</p>
        </div>
      </div>
    </div>
  );
}

export default Couter;

export function ChangeColor(){
  const [color,setColor] = useState("#ffffAa");
return (
  <div className="changeBackgroudColor" style={{backgroundColor: color}}>
    <button id="btnChange" onClick={()=>{setColor((c)=>"#faf");}}>Change Background Color</button>
  </div>
)
}