import classes from "./Summary.module.css";

const Summary = (props) => {
  return (
    <section className={classes.summary} onClick={props.onShowSummary}>
      <h2> Instructiuni</h2>
      <p>
        1. La gasirea unui obiect apasati butonul "Gasit" pentru a-l marca. 
        
      </p>
      <p>
      2. Pentru a afla ce obiect trebuie sa cautati cititi ghicitoarea corespunzatoare si
        apasati butonul "Reda" pentru a reda vibratia.
      </p>
    </section>
  );
};

export default Summary;
