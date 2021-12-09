import { useEffect, useState } from "react";
import classes from "./AvailableObjects.module.css";
import Card from "../UI/Card";
import ItemObject from "./ItemObject/ItemObject";

const AvailableObjects = () => {
  const [obj, setObj] = useState([]);

  useEffect(() => {
    const fetchObjects = async () => {
      const response = await fetch(
        "https://react-meals-4a4e5-default-rtdb.europe-west1.firebasedatabase.app/meals.json"
      );
      const responseData = await response.json();

      const loadedObjects = [];

      for (const key in responseData) {
        loadedObjects.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }

      setObj(loadedObjects);
    };

    fetchObjects();
  }, []);

  const availableObj = obj.map((objects) => (
    <li>
      <ItemObject
        id={objects.id}
        key={objects.id}
        name={objects.name}
        description={objects.description}
        price={objects.price}
      />
    </li>
  ));
  

  return (
    <section className={classes.avobj}>
      <Card>
        <ul>
          
          {availableObj }
          
          </ul>
      </Card>
    </section>
  );
};

export default AvailableObjects;
