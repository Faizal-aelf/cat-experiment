/**
 * 
 * Dashboard component
 * @author - NA 
 * @date - 1st March, 2024
 * 
 */
// GENERIC IMPORT
import {useState, useEffect} from 'react';

// COMPONENT IMPORT
import PageHeader from '../common/header/pageHeader';
import {Empty, Container} from '../../atom';

// STYLE IMPORT
import useStyles from './styles';

const DashboardPage = () => {
  const classes = useStyles();
  
  // STATE VARIABLE
  const [isLoading, setLoading] = useState(false);
  
  useEffect(() => {
    setTimeout(setLoading(false), 1000);
  })
  
  return (
    <Container> 
      <PageHeader title='Welcome Back, Aelf!' subtitle="Here's what you're looking at" {...{isLoading}}></PageHeader>
      <Empty 
        title='Coming soon...' 
        subtitle='Please visit some other time.' 
        icon={<i className="fa fa-ban"></i>}/>
    </Container>
  )
}

export default DashboardPage;