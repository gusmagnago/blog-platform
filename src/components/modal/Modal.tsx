import { Box, Modal, Typography } from '@mui/material';
import AuthButton from '../login/AuthButton';

type ModalProps = {
  open: boolean;
  onClose: () => void;
};

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const ModalComponent = ({ open, onClose }: ModalProps) => {
  return (
    <div>
      <Modal open={open} onClose={onClose}>
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="body1" pb={2}>
            You need to be logged in to read the full article
          </Typography>
          <AuthButton />
        </Box>
      </Modal>
    </div>
  );
};

export default ModalComponent;
