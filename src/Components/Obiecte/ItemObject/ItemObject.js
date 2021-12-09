import { useContext, useState } from "react";
import classes from "./ItemObject.module.css";
import Img from '../../../Assets/check.png';
import classess from "./ItemObjectForm.module.css";
import { SendVibrateSignal } from '../../Vibrations/Vibrations';
const ItemObject = (props) => {
  const price = `${props.price}`;

  const [showCart1, setCart1] = useState(true);
  var x=2;
  function cont() {
    
     x=x-1;
     console.log(x);
    return x;
  }
  const setShowCart1 = () => {
    
    
    
    if(cont()==0)
    {setCart1(false);}
  };

  return (
    <div className={classes.obj}>
      <div className={classes.info}>
        <h3>{props.name}</h3>
          <div className={classes.description}>{props.description}</div>
      </div>

      <div className={classess.form}>
        { showCart1 && <div className={classess.gasit}>
          <button onClick={() => setShowCart1()}> Gasit </button>
          <button onClick={SendVibrateSignal(price)}>Reda</button>
        </div>}

        {!showCart1 && <img className={classes.img} src={Img} alt="checkicon"/>}
      </div>
    </div>
  );
};

export default ItemObject;
