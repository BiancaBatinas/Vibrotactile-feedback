import classes from "./Summary.module.css";

const Summary = (props) => {
  return (
    <section className={classes.summary} onClick={props.onShowSummary}>
      <h2> USV </h2>
      <p>
        La corpul C se afla un plic in care se gasesc informatii despre locatia
        urmatoare.
      </p>
    </section>
  );
};

export default Summary;
