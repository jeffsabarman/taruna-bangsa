import styled from '@emotion/styled';
import { Box, Grid, Typography, useTheme, useMediaQuery } from '@mui/material';
import { useResponsive } from 'helpers/custom-hooks';
import Image from 'next/image';
import React, { FC } from 'react';
import { getShortenText } from 'helpers/mix';

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
  const { Phone, Tablet } = useResponsive();
  const customSmallDesktop = useMediaQuery('(max-width:1320px)');
  const customSmallPhone = useMediaQuery('(max-width:360px)');

  return (
    <Box
      borderRadius={theme.spacing(4)}
      overflow="hidden"
      bgcolor={
        variant === 'dark'
          ? theme.palette.primary.main
          : theme.palette.primary.light
      }
      maxWidth={customSmallPhone ? '100%' : Phone ? '20rem' : '22rem'}
      // sx={{ minWidth: '16rem', maxWidth: '22rem' }}
      // sx={{ width: customSmallDesktop ? '20rem' : '100%' }}
    >
      <Box position="relative">
        <img
          src={imageUrl}
          style={{ width: '100%', objectFit: 'cover', height: '16rem' }}
        />
      </Box>
      <Box py={theme.spacing(2)} px={theme.spacing(3)}>
        <Typography
          // variant={Phone ? 'subtitle1' : 'h6'}
          variant="subtitle1"
          color="whitesmoke"
        >
          {getShortenText(caption, 34, 36)}
        </Typography>
      </Box>
    </Box>
  );
};

export default NewsEventsCard;
