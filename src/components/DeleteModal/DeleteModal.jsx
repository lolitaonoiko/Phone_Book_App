import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';

import s from './DeleteModal.module.css';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  p: 4,
};

export default function DeleteModal({ onDelete }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleConfirm = () => {
    onDelete();
    handleClose();
  };

  return (
    <div>
      <Button onClick={handleOpen} variant="outlined" color="error">
        Delete
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
          <Box sx={style} className={s.modal}>
            <Typography
              id="transition-modal-title"
              variant="h6"
              component="h2"
              className={s.text}
            >
              Are you sure you want to delete the contact?
            </Typography>
            <Stack className={s.btnBox}>
              <Button
                variant="outlined"
                color="error"
                onClick={handleConfirm}
                style={{ width: '90px' }}
              >
                Confirm
              </Button>
              <Button
                variant="outlined"
                color="success"
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
