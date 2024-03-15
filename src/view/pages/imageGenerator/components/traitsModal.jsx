/**
 * 
 * Image Generator experiment component
 * @author - NA 
 * @date - 13th March, 2024
 * 
 */
// GENERIC IMPORT
import { useState } from 'react';
import {Box, Accordion, AccordionSummary, AccordionDetails, Chip, Modal, Button, Select, MenuItem, FormControl, InputLabel} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// JSON DATA
import TraitsDataList from '../data/traits.json';

// UTILS IMPORT
import useNotification from '../../../../utils/notification';

// STYLE IMPORT
import useStyles from '../styles';

const TraitsModal = (props) => {
  // DECLARE STYLE
  const classes = useStyles();

  // DECLARE NOTIFICATION AND NAVIDATE
  const setNotification = useNotification();

  // STATE VARIABLE
  const [selectedTraitType, setSelectedTraitType] = useState();
  
  // REF VARIABLE
  // const traitsList = objectToArray(TraitsDataList);
  const traitTypeList = Object.keys(TraitsDataList);

  const checkAddTraits = (value, traitType) => {
      if (isSameCategory(traitType)) {
          setNotification.error("Please select from different category, You have already selected one item from here.");
        return;
      }
      navigator.clipboard.writeText(value);
      if (!isExists(value, traitType)) {
        props.setSelectedTraits((prevList => [...prevList, {value, traitType}]));
      }
  }

  const isSameCategory = (traitType) => {
    return props.selectedTraits.some(item => item.traitType == traitType)
  }

  const removeTraits = (value, traitType) => {
    const updatedList = props.selectedTraits.filter(item => !(item.value == value && item.traitType == traitType));
    props.setSelectedTraits(updatedList);
  }

  const isExists = (value, traitType) => {
    return props.selectedTraits.some(item => item.value == value && item.traitType == traitType)
  }

  const handleChange = (event) => {
    setSelectedTraitType(event.target.value)
  };

  return (
    <Modal open>
      <Box className={classes.modal}>
        <Box className={classes.modalHeader}>
          <Box className={classes.modalTitle}>Select traits</Box>
        </Box>
        <Box className={classes.modalContent}>
          {props.selectedTraits.map((item) => <Chip color="primary" onDelete={() => removeTraits(item.value, item.traitType)} label={`${item.traitType}: ${item.value}`} className={classes.chipItem} key={`${item.value}-selected-traits`} />)}
          <Box mt={2}/>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Trait type</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                onChange={handleChange}
                fullWidth
              >
                {traitTypeList.map((item, index) => (
                  <MenuItem value={item} key={index}>{item}</MenuItem>
                ))}
              </Select>
            </FormControl>
        
            <Box className={classes.modalContentScroll}>
            {selectedTraitType && TraitsDataList?.[selectedTraitType].map((item, index) => (<Chip color="primary" onClick={() => checkAddTraits(item, selectedTraitType)} label={item} 
              variant={isExists(item, selectedTraitType) ? 'filled' : "outlined"} className={classes.chipItem} key={`${item}-${selectedTraitType}-${index}`} 
              {...(isExists(item, selectedTraitType) && { onDelete: () => removeTraits(item, selectedTraitType)})} />
            ))}
            </Box>
        </Box>
        <Box className={classes.modalFooter}>
          <Button variant="outlined" onClick={props.onClose}>Close</Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default TraitsModal;

/**
 * {traitsList.map((item, index) => (
        <Accordion key={index}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
            className={classes.title}
            >
            {item.traitType}
            </AccordionSummary>
            <AccordionDetails>
            {item.value.map((trait, index) => (
            <Chip color="primary" onClick={() => checkAddTraits(trait, item.traitType)} label={trait} 
            variant={isExists(trait, item.traitType) ? 'filled' : "outlined"} className={classes.chipItem} key={`${trait}-${item.traitType}-${index}`} 
            {...(isExists(trait, item.traitType) && { onDelete: () => removeTraits(trait, item.traitType)})} />
            ))}
            </AccordionDetails>
        </Accordion>
    ))}
 */