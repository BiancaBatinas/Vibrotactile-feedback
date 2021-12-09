import { Fragment, useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Object from "./Components/Obiecte/Objects";
import Cart from "./Components/Cart";


function App() {
  const [showCart, setCart] = useState(false);
  const setShowCart = () => {
    setCart(true); //se afiseaza Cartu-ul
  };

  const setHideCart = () => {
    setCart(false); //Cart-ul este ascuns
  };

  return (
    <div>
      {showCart && <Cart onClose={setHideCart} />}
      <Header onShowCart={setShowCart} />

      <main>
        <Object />
      </main>
      
    </div>
  );
}

export default App;
