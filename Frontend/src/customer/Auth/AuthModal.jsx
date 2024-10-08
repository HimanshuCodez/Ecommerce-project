import React from 'react'
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import RegisterForm from './RegisterForm';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
outline :  "none",
  boxShadow: 24,
  p: 4,
};
const AuthModal = ({handleClose, open}) => {
  return (
    <div>
      <Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style}>
   <RegisterForm/>
  </Box>
</Modal>
    </div>
  )
}

export default AuthModal