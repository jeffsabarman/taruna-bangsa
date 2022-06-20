import { Box, BoxProps, useTheme } from '@mui/material';
import React, { FC } from 'react';

interface ContainerProps extends BoxProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

const Container: FC<ContainerProps> = ({ size = 'md', children, ...props }) => {
  const theme = useTheme();
  const sizes = {
    xs: 2,
    sm: 4,
    md: 8,
    lg: 16,
    xl: 24,
  };

  return (
    <Box p={theme.spacing(sizes[size])} {...props}>
      {children}
    </Box>
  );
};

export default Container;
