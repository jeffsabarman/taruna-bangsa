import styled from '@emotion/styled';
import { Box, Grid, Typography, useTheme } from '@mui/material';
import { useResponsive } from 'helpers/custom-hooks';
import Image from 'next/image';
import React, { FC } from 'react';

interface NewsEventsCardProps {
  imageUrl: string;
  caption: string;
  variant?: 'dark' | 'light';
}

const NewsEventsCard: FC<NewsEventsCardProps> = ({
  imageUrl,
  caption,
  variant,
}) => {
  /** Utilities */
  const theme = useTheme();
  const { Tablet } = useResponsive();

  return (
    <Box
      borderRadius={theme.spacing(4)}
      overflow="hidden"
      bgcolor={
        variant === 'dark'
          ? theme.palette.primary.main
          : theme.palette.primary.light
      }
      sx={{
        minWidth: '16rem',
        maxWidth: '22rem',
        height: '100%',
        // height,
        // width: '100%',
      }}
    >
      <Box position="relative">
        <img
          src={imageUrl}
          style={{ width: '100%', objectFit: 'cover', height: '14rem' }}
        />
      </Box>
      <Box
        py={theme.spacing(2)}
        px={theme.spacing(3)}
        sx={{ overflow: 'auto' }}
      >
        <Typography
          // variant="h6"
          variant="subtitle1"
          color="whitesmoke"
        >
          {caption}
        </Typography>
      </Box>
    </Box>
  );
};

export default NewsEventsCard;
