import { Card, CardMedia, Typography } from '@mui/material';
import React from 'react';

type FacilityImageProps = {
  image: string;
  title: string;
  handleClick: () => void;
};

const FacilityImage = ({ image, title, handleClick }: FacilityImageProps) => {
  return (
    <Card
      sx={{
        width: '100%',
        height: '240',
        cursor: 'pointer',
        position: 'relative',
        borderRadius: '12px',
      }}
      onClick={() => handleClick()}
    >
      <CardMedia component="img" image={image} sx={{ position: 'relative' }} />
      <Typography
        variant="body2"
        p={1}
        color="whitesmoke"
        bgcolor="rgba(1,1,1,0.7)"
        position="absolute"
        bottom={0}
        width="100%"
      >
        {title}
      </Typography>
    </Card>
  );
};

export default FacilityImage;
