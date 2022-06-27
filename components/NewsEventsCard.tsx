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
  const { SmallDesktop } = useResponsive();
  /** Functions */
  const getImageStyle = () => {
    const width = SmallDesktop ? 260 : 352;
    const height = SmallDesktop ? 141 : 233.54;

    return { width, height };
  };

  return (
    <Box
      borderRadius={theme.spacing(4)}
      overflow="hidden"
      bgcolor={
        variant === 'dark'
          ? theme.palette.primary.main
          : theme.palette.primary.light
      }
    >
      <Box position="relative">
        <Image
          src={imageUrl}
          width={getImageStyle().width}
          height={getImageStyle().height}
          objectFit="cover"
        />
      </Box>
      <Box width={getImageStyle().width} p={theme.spacing(4)}>
        <Typography variant="h6" color="whitesmoke">
          {caption}
        </Typography>
      </Box>
    </Box>
  );
};

export default NewsEventsCard;
