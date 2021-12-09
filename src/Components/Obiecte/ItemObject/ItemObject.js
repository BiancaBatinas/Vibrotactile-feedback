import { useContext, useState } from "react";
import classes from "./ItemObject.module.css";
import Cart from "../../Cart";
import classess from "./ItemObjectForm.module.css";
import { SendVibrateSignal } from '../../Vibrations/Vibrations';
const ItemObject = (props) => {
  const price = `${props.price}`;
  const [showCart1, setCart1] = useState(false);

  const setShowCart1 = () => {
    setCart1(true);
  };

  return (
    <li className={classes.obj}>
      <div>
        <h3>{props.name}</h3>
        {showCart1 && (
          <div className={classes.description}>{props.description}</div>
        )}

        <div className={classes.code}>{price}</div>
      </div>

      <div className={classess.form}>
        <div className={classess.gasit}>
          <button onClick={() => setShowCart1()}> Found </button>
          <button onClick={SendVibrateSignal(price)}>Play</button>
        </div>
      </div>
    </li>
  );
};

export default ItemObject;
