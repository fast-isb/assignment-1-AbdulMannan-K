import React from 'react'
import { Dialog, DialogTitle, DialogContent, makeStyles, Typography } from '@mui/material';
import ActionButton from "./controls/ActionButton";
import CloseIcon from '@mui/icons-material/Close';

// const useStyles = makeStyles(theme => ({
//     dialogWrapper: {
//         padding: theme.spacing(2),
//         position: 'absolute',
//         top: theme.spacing(5)
//     },
//     dialogTitle: {
//         paddingRight: '0px'
//     }
// }))

export default function Popup(props) {

    const { title, children, openPopup, setOpenPopup } = props;
    // const classes = useStyles();

    return (
        <Dialog open={openPopup} maxWidth="sm" data-testid="popup">
            <DialogTitle >
                <div style={{ display: 'flex' }}>
                    <Typography variant="h6" component="div" style={{ flexGrow: 1 }}>
                        {title}
                    </Typography>
                    <ActionButton
                        color="secondary"
                        onClick={()=>{setOpenPopup(false)}}>
                        <CloseIcon />
                    </ActionButton>
                </div>
            </DialogTitle>
            <DialogContent dividers>
                {children}
            </DialogContent>
        </Dialog>
    )
}
