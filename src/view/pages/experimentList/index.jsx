/**
 * 
 * Experiment List component
 * @author - NA 
 * @date - 13th March, 2024
 * 
 */
// GENERIC IMPORT
import { useState, useEffect } from 'react';
import axios from 'axios';

// COMMON COMPONENT
import {Container, Empty} from '../../atom';
import {EXPERIMENT_LIST_API} from '../../../api/constants';
import PageHeader from '../common/header/pageHeader';
import ExperimentTiles from './components/experimentTiles';
import ExperimentItem from './components/experimentItem';

// MOCK DATA
import ExperimentList from './data/list.json';

// UTILS IMPORT
import useNotification from '../../../utils/notification';

// STYLE IMPORT
import useStyles from './styles';

const ExperimentListPage = () => {
  // DECLARE STYLE
  const classes = useStyles();

  // DECLARE NOTIFICATION AND NAVIDATE
  const setNotification = useNotification();

  // STATE VARIABLE
  const [state, setState] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const widths = [2, 2, 2, 2, 2, 2]

  const getExperimentList = async () => {
    setLoading(true);
    try {
        const response = await axios.get(EXPERIMENT_LIST_API);
        setState(response.data);
        // ONCE ABOVE API CODE UN-COMMENTED THEN COMMENT THE BELOW SET STATE MOCK DATA CODE
        // setState(ExperimentList);
    } catch (error) {
      console.log('error: ', error);
      setNotification.error("Something went wrong. Please try again later.");
    } finally {
        setLoading(false);
    }
  };

  useEffect(() => {
    getExperimentList();
  }, []);

  return (
    <Container>
      <PageHeader title='Experiment List' subtitle="Here's what you're looking at"  {...{isLoading}}></PageHeader>
      <ExperimentTiles widths={widths}/>
      {state?.length > 0 ? state.map((item, index) => (
        <ExperimentItem key={index} widths={widths} data={item}/>
      )) : <Empty 
      title='No experiment created yet' 
      subtitle='Please create new experiment from Experiment Submitter page.' 
      icon={<i className="fa fa-file-image-o"></i>}/>}
    </Container>
  );
};

export default ExperimentListPage;