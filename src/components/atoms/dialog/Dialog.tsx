import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Box, Divider, IconButton, Typography } from '@mui/material';
import Close from '@mui/icons-material/Close';

export interface DialogProps {
    modalTitle?: string,
    buttonLabel?: string,
    modalContent?: string,
    modalButton?: any
    variant: "outlined" | "contained" | "text",
    HeaderIcon?: any,
    HeaderIconColor?:"primary" | "secondary" | "warning" | "error",
}

export const AlertDialog = ({
    modalTitle,
    buttonLabel,
    modalContent,
    modalButton,
    variant = 'outlined',
    HeaderIcon: IconComponent,
    HeaderIconColor = 'primary',
}: DialogProps) => {
    const [open, setOpen] = React.useState(false);
    
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <React.Fragment>
            <Button variant={variant} onClick={handleClickOpen}>
                {buttonLabel}
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                role="alertdialog"
            >
                <DialogTitle id="alert-dialog-title" sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Box sx={{display:"flex", alignItems:"center", gap:'1.5px'}} >
                        {IconComponent && <IconComponent color={HeaderIconColor} />}
                        <Typography variant="h6" component="span">{modalTitle}</Typography>
                    </Box>
                    <IconButton onClick={handleClose}>
                        <Close />
                    </IconButton>
                </DialogTitle>
                <Divider></Divider>

                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {modalContent}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    {modalButton.map((button:any)=>{
                        return(<Button color={button.color} variant={button.variant} onClick={handleClose} autoFocus>
                        {button.label}
                    </Button>)
                    })}
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}