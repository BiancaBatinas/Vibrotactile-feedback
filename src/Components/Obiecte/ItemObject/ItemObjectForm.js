import classes from './ItemObjectForm.module.css';
import ItemObject from './ItemObject';
import { useRef, useState } from 'react';

const ItemObjectForm = props => {
    const [amountIsValid, setAmountIsValid] = useState(true);
    const amountInputRed = useRef();
    

    const submitHandler = (event) => {
      event.preventDefault();
  
      const enteredAmount =  amountInputRed.current.value;
      const enteredAmountNumber = +enteredAmount;
  
        
    if (
        enteredAmount.trim().length === 0 ||
        enteredAmountNumber < 1 ||
        enteredAmountNumber > 5
      ) {
        setAmountIsValid(false);
        return;
      }
  
      props.onAddToCart(enteredAmountNumber);
    };

  
    
 return <form className={classes.form } >
     
     <div className={classes.gasit}>
          <button > Found </button>
          <button> <img src="Users\bianc\Concurs25h\src\Assets\images.png"></img> Play </button> 
         
          </div>
    
 </form>

};

export default ItemObjectForm;