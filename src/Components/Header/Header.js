import {Fragment} from 'react';
import classes from './Header.module.css';
import buttonImg from '../../Assets/1.jpg';

const Header = props => {
    return <Fragment>
        <header className={classes.header}>
            <h1> TreasureHunt </h1>
        </header>
        <div className={classes['main-image']}>
            <img src={buttonImg} alt="Img fundal"/>
        </div>

    </Fragment>
};

export default Header;