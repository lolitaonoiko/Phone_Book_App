import * as React from 'react';

import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Stack, TextField } from '@mui/material';

import s from './EditModal.module.css';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  p: 4,
};

export default function EditModal({
  id,
  currentNumber,
  currentName,
  onUpdate,
}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [newName, setNewName] = React.useState(currentName);
  const [newNumber, setNewNumber] = React.useState(currentNumber);

  const handleConfirm = () => {
    onUpdate({ id, newName, newNumber });
    handleClose();
  };

  return (
    <div>
      <Button
        onClick={handleOpen}
        color="primary"
        variant="outlined"
        style={{ width: '90px' }}
      >
        EDIT
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        disableEnforceFocus
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style} className={s.modal} inert>
            <Typography
              id="transition-modal-title"
              variant="h6"
              component="h2"
              className={s.text}
            >
              Please edit the contact
            </Typography>
            <Stack spacing={2} sx={{ mt: 2 }}>
              <TextField
                label="New Name"
                variant="outlined"
                value={newName}
                onChange={e => setNewName(e.target.value)}
                fullWidth
              />
              <TextField
                fullWidth
                margin="normal"
                label="New Number"
                variant="outlined"
                value={newNumber}
                onChange={e => setNewNumber(e.target.value)}
              />
            </Stack>
            <Stack direction="row" spacing={2} className={s.btnBox}>
              <Button
                variant="contained"
                color="success"
                onClick={handleConfirm}
                style={{ width: '90px' }}
              >
                Save
              </Button>
              <Button
                variant="outlined"
                color="error"
                onClick={handleClose}
                style={{ width: '90px' }}
              >
                Cancel
              </Button>
            </Stack>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
