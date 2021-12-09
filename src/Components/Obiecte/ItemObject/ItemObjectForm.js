import classes from "./ItemObjectForm.module.css";

const ItemObjectForm = (props) => {
  return (
    <form className={classes.form}>
      <div className={classes.gasit}>
        <button> Found </button>
        <button>
          
          <img src="Users\bianc\Concurs25h\src\Assets\images.png"></img> Play
        </button>
      </div>
    </form>
  );
};

export default ItemObjectForm;
