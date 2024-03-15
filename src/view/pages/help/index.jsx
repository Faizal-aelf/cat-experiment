/**
 * 
 * Help Page component
 * @author - NA 
 * @date - 1st March, 2024
 * 
 */
// GENERIC IMPORT
import {useState, useEffect} from 'react';
import {Accordion, AccordionSummary, AccordionDetails} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// COMPONENT IMPORT
import PageHeader from '../common/header/pageHeader';
import {Container} from '../../atom';

// VIDEO
import video1 from './video/1.mp4';
import video2 from './video/2.mp4';
import video3 from './video/3.mp4';

// STYLE IMPORT
import useStyles from './styles';

const HelpPage = () => {
  const classes = useStyles();
  // STATE VARIABLE
  const [isLoading, setLoading] = useState(false);
  const [expanded, setExpanded] = useState('panel1');
  
  useEffect(() => {
    setTimeout(setLoading(false), 1000);
  })
  return (
    <Container> 
      <PageHeader title='Help' subtitle="Quick assistance for all your queries and concerns. Get help now!" {...{isLoading}}></PageHeader>
      <Accordion expanded={expanded === 'panel1'} onChange={() => setExpanded('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          className={classes.title}
        >
          Guided Video Tutorial: Creating an Experiment
        </AccordionSummary>
        <AccordionDetails>
          <video controls  className={classes.videoFrame}>
            <source src={video1} type="video/mp4"/>
            Your browser does not support the video tag.
          </video>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={() => setExpanded('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
          className={classes.title}
        >
          Guided Video Tutorial: Experiment List and Status Check
        </AccordionSummary>
        <AccordionDetails>
          <video controls  className={classes.videoFrame}>
            <source src={video2} type="video/mp4"/>
            Your browser does not support the video tag.
          </video>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={() => setExpanded('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
          className={classes.title}
        >
          Guided Video Tutorial: Creating Experiment Details and Reviewing Results
        </AccordionSummary>
        <AccordionDetails>
          <video controls className={classes.videoFrame}>
            <source src={video3} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </AccordionDetails>
      </Accordion>
    </Container>
  )
}

export default HelpPage;