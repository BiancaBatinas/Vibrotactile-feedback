import { Fragment,useState  } from 'react';
import Summary from './Summary';
import AvailableObjects from './AvailableObjects';

const Objects = props => {

    const [summaryshow, setsummary] = useState(true);

  const onSetSummary = () => {
      setsummary(false);
  };
    return (<Fragment>
        {summaryshow && <MealsSummary onShowSummary={onSetSummary}/>}
        <AvailableMeals/>
    </Fragment>);
};


export default Objects;