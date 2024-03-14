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
import {Container} from '../../atom';
import {EXPERIMENT_LIST_API} from '../../../api/constants';
import PageHeader from '../common/header/pageHeader';
import ExperimentTiles from './components/experimentTiles';
import ExperimentItem from './components/experimentItem';

// MOCK DATA
import ExperimentList from './data/list.json';

// STYLE IMPORT
import useStyles from './styles';

const ExperimentListPage = () => {
  // DECLARE STYLE
  const classes = useStyles();

  // STATE VARIABLE
  const [state, setState] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const widths = [1, 1, 1, 1, 1, 1]

  const getExperimentList = async () => {
    setLoading(true);
    try {
        const response = await axios.get(EXPERIMENT_LIST_API);
        setState(response.data);
        // ONCE ABOVE API CODE UN-COMMENTED THEN COMMENT THE BELOW SET STATE MOCK DATA CODE
        // setState(ExperimentList);
    } catch (error) {
      console.log('error: ', error);
      alert("Error occured:");
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
      {state.map((item, index) => (
        <ExperimentItem key={index} widths={widths} data={item}/>
      ))}
    </Container>
  );
};

export default ExperimentListPage;