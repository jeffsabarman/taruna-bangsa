import { Grid, Typography, Box, useTheme } from '@mui/material';
import { grey } from '@mui/material/colors';
import { ArrowForwardIos as ArrowIcon } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import { FC } from 'react';
import Image from 'next/image';
import { getShortenText, getFormatDate } from 'helpers';

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: grey[100],
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: grey[200],
  },
}));

interface CardNewsEventProps {
  imgUrl: string;
  publishedAt: string;
  title: string;
  body: string;
}

const CardNewsEvent: FC<CardNewsEventProps> = ({
  imgUrl,
  publishedAt,
  title,
  body,
}) => {
  //* Style
  const theme = useTheme();

  return (
    <StyledBox>
      <Grid container direction="column">
        <Grid item>
          <img
            src={imgUrl}
            style={{
              width: '100%',
              height: '18rem',
              objectFit: 'cover',
              // borderRadius: '0.5rem 0.5rem 0 0',
            }}
          />
        </Grid>
        <Grid container direction="column" spacing={2} p={3}>
          <Grid item>
            <Typography variant="body2" fontWeight={600} color={grey[600]}>
              {getFormatDate(publishedAt)}
            </Typography>
          </Grid>
          <Grid item>
            <Typography color="primary" variant="subtitle1">
              {getShortenText(title, 56, 58)}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="caption">
              {getShortenText(body, 120, 124)}
            </Typography>
          </Grid>
          <Grid
            item
            mt={2}
            mb={1}
            sx={{
              color: theme.palette.primary.light,
              '&:hover': {
                color: theme.palette.warning.main,
              },
            }}
          >
            <Grid container spacing={1}>
              <Grid item>
                <Typography variant="body2" fontWeight={600}>
                  Baca Lebih
                </Typography>
              </Grid>
              <Grid item>
                <ArrowIcon
                  // fontSize="small"
                  sx={{
                    fontSize: '1.2rem',
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </StyledBox>
  );
};

export default CardNewsEvent;
