import { Fragment,useState  } from 'react';
import Summary from './Summary';
import AvailableObjects from './AvailableObjects';

const Objects = props => {

    const [summaryshow, setsummary] = useState(true);

  const onSetSummary = () => {
      setsummary(false);
  };
    return (<Fragment>
        {summaryshow && <Summary onShowSummary={onSetSummary}/>}
        <AvailableObjects/>
    </Fragment>);
};


export default Objects;