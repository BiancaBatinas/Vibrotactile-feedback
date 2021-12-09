import { useContext, useState } from "react";
import classes from "./ItemObject.module.css";
import Cart from "../../Cart";
import classess from "./ItemObjectForm.module.css";
<<<<<<< Updated upstream
import { SendVibrateSignal } from '../../Vibrations/Vibrations';
=======
import AvailableObjects from "../AvailableObjects";

>>>>>>> Stashed changes
const ItemObject = (props) => {
  const price = `${props.price}`;

  const [showCart1, setCart1] = useState({data:false});
 
  
  const setShowCart1 = () => {
      setCart1({data:true});
  };

  return (
    <div className={classes.obj}>
      <div className={classes.info}>
        <h3>{props.name}</h3>
        
        {showCart1 && (
          <div className={classes.description}>{props.description}</div>
        )}

       
      </div>

      <div className={classess.form}>
<<<<<<< Updated upstream
        <div className={classess.gasit}>
          <button onClick={() => setShowCart1()}> Found </button>
          <button onClick={SendVibrateSignal(price)}>Play</button>
        </div>
=======
        
          <button onClick={setShowCart1}  > Found </button>
          <button>Play</button>
        
>>>>>>> Stashed changes
      </div>
    </div>
  );
};

export default ItemObject;
