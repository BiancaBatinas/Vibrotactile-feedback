import { useEffect, useState } from 'react';
import classes from './AvailableObjects.module.css';
import Card from '../UI/Card';
import ItemObject from './ItemObject/ItemObject';
/*const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Sushi',
      description: 'Finest fish and veggies',
      price: 22.99,
    },
    {
      id: 'm2',
      name: 'Schnitzel',
      description: 'A german specialty!',
      price: 16.5,
    },
    {
      id: 'm3',
      name: 'Barbecue Burger',
      description: 'American, raw, meaty',
      price: 12.99,
    },
    {
      id: 'm4',
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      price: 18.99,
    },
  ];*/

const AvailableObjects = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch('https://react-meals-4a4e5-default-rtdb.europe-west1.firebasedatabase.app/meals.json');
      const responseData = await response.json();

      const loadedMeals = [];

      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }

      setMeals(loadedMeals);
    };

    fetchMeals();
  }, []);
        
    const availablemeals = meals.map(meal => <li><ItemObject id={meal.id} key = {meal.id} name={meal.name} description={meal.description} price={meal.price}/></li>)
    
    return <section className={classes.meals}>
      <Card>
        <ul>
            {availablemeals}
        </ul>
        </Card>
    </section>


};

export default AvailableObjects;