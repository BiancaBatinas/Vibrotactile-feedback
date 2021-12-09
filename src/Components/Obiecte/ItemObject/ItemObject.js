import { useContext } from 'react';
import classes from './ItemObject.module.css';
import ItemObjectForm from './ItemObjectForm';
import Cart from '../../Cart';

const ItemObject = props => {
    const cartCtx = useContext(Cart);

    const price =`${props.price} lei`;

    const addToCartHandler = amount => {
        cartCtx.addItem({
          id: props.id,
          name: props.name,
          amount: amount,
          price: props.price
        });
      };
      
    return <li className={classes.meal}>
        <div>
            <h3>{props.name}</h3>
            <div className={classes.description}>{props.description}</div>
            <div className={classes.price}>{price}</div>
        </div>

        <div>
            <ItemObjectForm onAddToCart={addToCartHandler} ></ItemObjectForm>
        </div>

    </li>
};

export default ItemObject;