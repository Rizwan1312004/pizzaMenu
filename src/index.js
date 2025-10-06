import { React } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "public/pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "public/pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "public/pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "public/pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "public/pizzas/salamino.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "public/pizzas/prosciutto.jpg",
    soldOut: true,
  },
];

function Header() {
  return (
    <header className="header">
      <h1>Rizwan's Pizza shop</h1>
    </header>
  );
}
function Menu() {
  const pizzaValue = pizzaData;
  const numPizzas = pizzaValue.length;

  return (
    <div className="container">
      <div className="menu">
        <h2>OUR Menu</h2>

        {numPizzas > 0 ? (
          <>
            <p>
              This is a pizza menu app for ordering and checking the stock of
              pizzas.
            </p>
            <ul className="pizzas">
              {/* Very Importent*/}
              {pizzaData.map((pizzas) => (
                <Pizza pizzaObj={pizzas} key={pizzas.name} />
              ))}
            </ul>
            <button className="btn order">:Order</button>
          </>
        ) : (
          <p>We are still working on the menu :( so please wait </p>
        )}
      </div>
    </div>
  );
}
function Footer() {
  const time = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  const hour = new Date().getHours();
  const openHour = 8;
  const closeHour = 21;
  const closeOrOpen =
    hour > openHour && hour < closeHour ? "We're Open!" : "We're Closed :(";
  return (
    <footer className="footer">
      The time is {time}. {closeOrOpen}
    </footer>
  );
}

function Pizza({ pizzaObj }) {
  const soldOut = pizzaObj.soldOut ? "Sold Out" : "";
  return (
    <li className={` ${pizzaObj.soldOut ? "sold-out" : "pizza"}`}>
      <img src={pizzaObj.photoName} alt="Pizza-img" />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <hr />
        <p>
          price<span>{pizzaObj.price * 87} Rs</span>
        </p>
        <h1>{soldOut}</h1>
      </div>
    </li>
  );
}

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <Menu />
        <Footer />
      </div>
    </>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(<App />);
