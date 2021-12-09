import { useContext, useState } from "react";
import classes from "./ItemObject.module.css";
import ItemObjectForm from "./ItemObjectForm";
import Cart from "../../Cart";
import classess from "./ItemObjectForm.module.css";

const ItemObject = (props) => {
  const cartCtx = useContext(Cart);

  const price = `${props.price}`;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  const [showCart1, setCart1] = useState(false);

  const setShowCart1 = () => {
     if(price==1)
    setCart1(true);
    
    
  };

  const setHideCart1 = () => {
    setCart1(false); //Cart-ul este ascuns
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        {showCart1 && (
          <div className={classes.description}>{props.description}</div>
        )}

        <div className={classes.price}>{price}</div>
      </div>

      <div className={classess.form}>
        <div className={classess.gasit}>
          <button onClick={() => setShowCart1()}> Found </button>
          <button>
            <img src="Users\bianc\Concurs25h\src\Assets\images.png"></img> Play
          </button>
        </div>
      </div>
    </li>
  );
};

export default ItemObject;
