"use client"
import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Action } from '@/types';
import { fakeDataArray } from '@/app/helper/helper';


export default function AlertDialog({text,index} : Action) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose =  () => {
    setOpen(false);
    fakeDataArray[index].state = false
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen} color={text === "Delete" ? "error" : "primary"}>
        {text}
      </Button>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Etes vous sur de vouloir supprimer cette evenement de la liste?"}
        </DialogTitle>

        <DialogActions>
          <Button onClick={handleClose} color='error'>Yes</Button>
          <Button onClick={handleClose} autoFocus>
            No
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}