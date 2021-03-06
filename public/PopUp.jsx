import React from 'react';
import { makeStyles,  createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Res from './Resources';
function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles(
  createStyles({
    paper: {
      position: 'absolute',
      width: '50%',
      height: '50%',
      backgroundColor: "white",
      border: '2px solid #000',
     boxShadow: "grey",
      padding: '10px',
    },
  }),
);

export default function SimpleModal() {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <Res />
    </div>
  );

  return (
    <div>
      <button type="button" onClick={handleOpen}>
Touch for Resources
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
