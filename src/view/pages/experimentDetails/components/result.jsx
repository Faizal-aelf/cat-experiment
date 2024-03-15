/**
 * 
 * Result component
 * @author - NA 
 * @date - 15th March, 2024
 * 
 */
// GENERIC IMPORT
import clsx from 'clsx';
import {Box, Chip} from '@mui/material';

// COMMON COMPONENT
import {CardImage} from '../../../molecules';
import {getImageSizeInKB} from '../../../../utils/file';

// STYLE IMPORT
import useStyles from '../styles';

const Result = (props) => {
    // DECLARE STYLE
    const classes = useStyles();
  
    return (
        <Box>
            {props?.result.map((item, index) => (
            <Box className={classes.dataList} key={`result-image-${index}`}>
                <Box width={300} className={classes.dataListItem}>
                <Box>
                    <CardImage file={
                    {
                        imageSrc: `data:image/webp;base64, ${item.imageResult}`,
                        size: `${getImageSizeInKB(item.imageResult).toFixed(2)} KB`,
                    }
                    }/>
                    <Box className={classes.title} textAlign={'center'} marginTop={0.5}><strong>Created date: </strong>{Date(item.create_date)}</Box>
                </Box>
                </Box>
                <Box className={classes.dataListItem}>
                <Box className={classes.title} marginTop={0.5}><strong>Prompt: </strong>{item.prompt}&nbsp;<i className={clsx("fa fa-clone", classes.copyIcon)} onClick={() => navigator.clipboard.writeText(item.prompt)}></i></Box>
                </Box>
                <Box className={classes.dataListItem}>
                <Box className={classes.title} marginTop={1}><strong>Revised prompt: </strong>{item.revised_prompt}&nbsp;<i className={clsx("fa fa-clone", classes.copyIcon)} onClick={() => navigator.clipboard.writeText(item.revised_prompt)}></i></Box>
                </Box>
                {item.traits && <Box className={classes.dataListItem}>
                    <Box>
                        <Box className={classes.title} marginTop={1}><strong>Traits: </strong>{JSON.stringify(item.traits)}&nbsp;</Box>
                        <Box display={'block'} mt={1}><Chip label={<><strong>Total traits:</strong> {item.traits.length}</>} size="small" variant="outlined" /></Box>
                    </Box>
                </Box>}
            </Box>
            ))}
            </Box>
    );
};

export default Result;