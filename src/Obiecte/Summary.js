import classes from './Summary.module.css';

const Summary = (props) => {
  

return(  <section className={classes.summary} onClick={props.onShowSummary} >
            <h2> We deliver to you</h2>
            <p>
                Choose your favorite meal from our broad selection of available meals
                and enjoy a delicious lunch or dinner at home.
              </p>
              <p>
                All our meals are cooked with high-quality ingredients, just-in-time and
                of course by experienced chefs!
              </p>
  </section> );

};

export default Summary;