/**
 * 
 * Card Image component
 * @author - NA 
 * @date - 4th March, 2024
 * 
 */
// GENERIC IMPORT
import {Box, Button, Chip} from '@mui/material';
import Magnifier from "react-magnifier";
import WebPImage from 'react-webp-image';

// UTILS 
import {handleDownload} from '../../../utils/file';
import {IMAGE_FORMAT} from '../../../utils/constants';
import {FEATURE} from '../../../utils/feature';

// STYLE IMPORT
import useStyles from './styles';

const CardImage = (props) => {
    const {imageSrc, imageRef, title, size, handleImageModal, isDownloadable, isWebpImage, imageSize, ...rest} = props.file;
    // DECLARE STYLE
    const classes = useStyles();
    const sourceImg = imageRef?.current?.src || imageSrc;
    const widthSize = imageSize || '300px';

    return (
        <Box className={classes.cardImageContainer}>
            {!isWebpImage && <Magnifier onClick={() => handleImageModal?.(sourceImg)} 
                {...(imageRef && { ref: imageRef })} 
                className={classes.cardImage} src={imageSrc} 
                width={widthSize}
            />}
            {isWebpImage && <WebPImage src={imageSrc} className={classes.cardImage}/>}
            {FEATURE.SHOW_IMAGE_SIZE && (title || size) && <Box className={classes.cardImageTitle}>{title} {size && <Chip label={size} size="small" variant="outlined" />}</Box>}
            {isDownloadable && <Button variant="text" startIcon={<i className="fa fa-download"></i>}>Download</Button>}
        </Box>
    )
};
export default CardImage;