import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import pizzaData from "./data/pizzaData.json";

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}
function Header() {
  return (
    <header className="header">
      <h1>Hello !!!</h1>;
    </header>
  );
}
function Menu() {
  const numPizza = pizzaData.length;
  return (
    <div className="menu">
      <h3>Menu Pizzas</h3>
      {numPizza > 0 ? (
        <ul className="pizzas">
          {pizzaData.map((p, index) => (
            <Pizza
              soldOut={p.soldOut}
              name={p.name}
              photoName={p.photoName}
              ingredients={p.ingredients}
            />
          ))}
        </ul>
      ) : (
        <p>We're working more ...</p>
      )}
    </div>
  );
}
function Footer() {
  const openHour = 9;
  const closeHour = 22;
  const currentTime = new Date().getHours();
  const isOpen = openHour <= currentTime && currentTime <= closeHour;
  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} />
      ) : (
        <div>
          <p>
            We are wellcome from {openHour} : 00 to {closeHour} : 00
          </p>
        </div>
      )}
    </footer>
  );
}
function Pizza(props) {
  return (
    <li className={`pizza ${props.soldOut ? "sold-out" : ""}`}>
      <img src={props.photoName} alt="pizza"></img>
      <h2>{props.name}</h2>
      <p>{props.ingredients}</p>
    </li>
  );
}
function Order(props) {
  return (
    <div className="order">
      <p>We are open until {props.closeHour} : 00. You can order now.</p>
      <div className="groupbtn">
        <button className="btn">Order</button>
        <button className="btn" onClick={ScrollToTop}>
          Home
        </button>
      </div>
    </div>
  );
}
// smooth: scrolling should animate smoothly
// instant: scrolling should happen instantly in a single jump
// auto: scroll behavior is determined by the computed value of scroll-behavior
function ScrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
