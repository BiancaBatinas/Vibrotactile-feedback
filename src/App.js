import { Fragment, useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Object from './Components/Obiecte/Objects';
import Cart from './Components/Cart';   
//import JSON from "./Components/Vibrations/pattern.json";
import {SendVibrateSignal} from "./Components/Vibrations/Vibrations";
//import {playSignal} from "./Components/Vibrations/pattern.js"

function App() {


    
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
      <Object/>
      </main><button onClick={SendVibrateSignal()}>APASA AICI MAI FRAIERICA</button>
    </div>
    
  );
}

export default App;
