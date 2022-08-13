import { ArrowRightAlt as ArrowRightIcon } from '@mui/icons-material';
import { Box, Button, Grid, Typography, useTheme } from '@mui/material';
import { useResponsive } from 'helpers/custom-hooks';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { FC, useCallback } from 'react';

export type Academic = {
  title: string;
  subtitle: string;
  avatar: string;
  color: 'yellow' | 'red' | 'lightblue' | 'grey';
  url: string;
};

interface AcademicCardProps {
  data: Academic;
}

const AcademicCard: FC<AcademicCardProps> = ({ data }) => {
  const theme = useTheme();
  const router = useRouter();
  const styles = {
    yellowHeader: {
      backgroundColor: theme.palette.warning.main,
      px: theme.spacing(2),
    },
    lighblueHeader: {
      backgroundColor: theme.palette.primary.light,
      px: theme.spacing(2),
    },
    redHeader: {
      backgroundColor: theme.palette.secondary.main,
      px: theme.spacing(2),
    },
    greyHeader: {
      backgroundColor: theme.palette.grey[500],
      px: theme.spacing(2),
    },
    primaryHeader: {
      backgroundColor: theme.palette.primary.main,
      px: theme.spacing(2),
    },
    '&.MuiButton-text': {
      fontSize: '1.2rem',
      textTransform: 'capitalize',
      color: theme.palette.primary.light,
      padding: 0,
      '&:hover': {
        backgroundColor: theme.palette.background.paper,
      },
    },
  };

  const getTitleStyle = useCallback(() => {
    if (data?.color) {
      switch (data.color) {
        case 'yellow':
          return styles.yellowHeader;

        case 'lightblue':
          return styles.lighblueHeader;

        case 'red':
          return styles.redHeader;

        default:
          return styles.greyHeader;
      }
    }
  }, [data?.color]);

  return (
    <Box>
      <Grid container direction="column">
        <Grid item>
          <Image
            src={data?.avatar}
            alt="Academic Card"
            width={240}
            height={240}
            style={{ borderRadius: 120 }}
            objectFit="cover"
          />
        </Grid>
        <Grid
          mt={theme.spacing(-8.5)}
          zIndex={1}
          container
          direction="column"
          item
        >
          <Grid item>
            <Typography
              display="inline-block"
              sx={getTitleStyle()}
              textTransform="uppercase"
              variant={'h6'}
              color="whitesmoke"
              minWidth={120}
            >
              {data?.title}
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              color="whitesmoke"
              display="inline-block"
              sx={styles.primaryHeader}
              variant="h6"
            >
              Taruna Bangsa
            </Typography>
          </Grid>
        </Grid>
        <Grid item mt={theme.spacing(2)}>
          <Typography variant="body2" color="GrayText">
            {data?.subtitle}
          </Typography>
        </Grid>
        <Grid item>
          <Button
            onClick={() => router.push(data?.url)}
            sx={styles['&.MuiButton-text']}
            endIcon={<ArrowRightIcon />}
          >
            See More
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AcademicCard;
