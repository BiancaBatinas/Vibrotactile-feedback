import { Fragment, useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Object from './Components/Obiecte/Objects';
import Cart from './Components/Cart';
import './Components/Vibrations/Vibrations';


import a from './Components/Vibrations/pattern.json';
function App() {
  const functie = prop => {
      const firstPattern = a["First pattern"];
      navigator.vibrate(firstPattern);
  }
  const [showCart, setCart]= useState(false);

  const setShowCart = () => {
      setCart(true); //se afiseaza Cartu-ul
  };

  const setHideCart = () => {
      setCart(false); //Cart-ul este ascuns
  };
  return (
    <div>
      {showCart && <Cart onClose={setHideCart}/>}
      <Header onShowCart={setShowCart}/>
        
      <main>
      <Object/><button onClick={functie}>DA</button>
      </main>
    </div>
    
  );
}

export default App;
