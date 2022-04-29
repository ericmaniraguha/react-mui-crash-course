import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

function ChildModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button onClick={handleOpen}>Here we are Rwanda.</Button>
      <Modal
        hideBackdrop
        open={open}
        onClose={handleClose}
        aria-labelledby='child-modal-title'
        aria-describedby='child-modal-description'
      >
        <Box sx={{ ...style, width: 200 }}>
          <h2 id='child-modal-title'>Major known idea about Rwanda.</h2>
          <p id='child-modal-description'>
            Rwanda's stunning scenery and warm, friendly people offer unique
            experiences in one of the most remarkable countries in the world. .
          </p>
          <Button onClick={handleClose}>Say, Hi to Kigali People.</Button>
        </Box>
      </Modal>
    </React.Fragment>
  );
}

export default function NestedModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleOpen}>Kigali Extra info.</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='parent-modal-title'
        aria-describedby='parent-modal-description'
      >
        <Box sx={{ ...style, width: 400 }}>
          <h2 id='parent-modal-title'>What is Kigali known for?</h2>
          <p id='parent-modal-description'>
            Kigali is the major arrival point for tourists visiting Rwanda's
            national parks and tracking mountain gorillas, and has its own sites
            of interest such as the Kigali Genocide Memorial and ecotourist
            facilities, as well as bars, coffee shops and restaurants.
          </p>
          <ChildModal />
        </Box>
      </Modal>
    </div>
  );
}
