import React from 'react';
import Dialog from '@mui/material/Dialog';
import { DialogTitle } from '@mui/material';
import { Image } from 'pages/facilities';

type FacilitiesSliderProps = {
  open: boolean;
  handleClose: () => void;
  image: Image;
};

const FacilitiesSlider = ({ open, handleClose }: FacilitiesSliderProps) => {
  return (
    <Dialog maxWidth="md" open={open} onClose={handleClose} aria-labelledby="">
      <DialogTitle>Gedung Sekolah</DialogTitle>
      <img
        src="https://images.unsplash.com/photo-1497465689543-5940d3cede89?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
        alt=""
        style={{
          width: '100%',
          objectFit: 'cover',
        }}
      />
    </Dialog>
  );
};

export default FacilitiesSlider;
