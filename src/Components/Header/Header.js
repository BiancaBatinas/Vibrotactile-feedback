import {Fragment} from 'react';
import classes from './Header.module.css';
import buttonImg from '../../Assets/meal.jpg';

const Header = props => {
    return <Fragment>
        <header className={classes.header}>
            <h1> TreasureHunt </h1>
        </header>
        <div className={classes['main-image']}>
            <img src={buttonImg} alt="Meals"/>
        </div>

    </Fragment>
};

export default Header;