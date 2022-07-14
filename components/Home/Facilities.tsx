import styled from '@emotion/styled';
import { Box, BoxProps, Grid, useTheme, useMediaQuery } from '@mui/material';
// import Image from 'next/image';
import React, { CSSProperties, FC, ReactNode } from 'react';
import HeaderLayout from '../HeaderLayout';
import { useResponsive } from 'helpers/custom-hooks';

type ImageProps = {
  orientation: 'landscape' | 'portrait';
};

// height: ${(p: any) => (p.orientation === 'landscape' ? '14vw' : '100%')};
// height: ${(p: any) => (p.orientation === 'landscape' ? '24vw' : '100%')};
const Image = styled.img<ImageProps>`
  width: 100%;
  object-fit: cover;
  border-radius: 0.2rem;
`;

interface FacilityImage extends BoxProps {
  url: string;
  orientation: 'landscape' | 'portrait';
}

const FacilityImage: FC<FacilityImage> = ({ url, orientation, ...props }) => {
  const { sx, ...other } = props;
  const styles = {
    container: {
      borderRadius: 2,
      overflow: 'hidden',
      boxShadow: '0px 10px 15px 6px rgba(0,0,0,0.1)',
      ...sx,
    },
  };
  const { Phone, Tablet } = useResponsive();

  return (
    <Box sx={styles.container} {...other}>
      <Image
        src={url}
        orientation={orientation}
        style={{
          height:
            orientation === 'landscape'
              ? Phone
                ? '48vw'
                : Tablet
                ? '26vw'
                : '14vw'
              : Phone
              ? '100%'
              : Tablet
              ? '85vw'
              : '100%',
        }}
      />
    </Box>
  );
};

const Facilities = () => {
  const theme = useTheme();
  const { Phone, Tablet } = useResponsive();

  return (
    <Box bgcolor={theme.palette.primary.main}>
      <Grid container direction="column">
        <HeaderLayout
          mode="dark"
          title="Fasilitas"
          subtitle="We are a school that empowers students to thrive in academic excellence; personal, social and emotional growth that are needed for success in their live and livelihood."
        >
          <Grid item xs>
            <Box
              sx={{
                marginTop: Phone ? theme.spacing(1) : theme.spacing(2),
                display: 'grid',
                gridTemplateColumns: Phone
                  ? 'repeat(2, 100%)'
                  : Tablet
                  ? 'repeat(2, 1fr)'
                  : 'repeat(3, 1fr)',
                gap: Phone ? 3 : 2,
                gridTemplateRows: Phone
                  ? 'repeat(6, 48vw)'
                  : Tablet
                  ? 'repeat(3, 26vw)'
                  : 'repeat(2, 14vw)',
              }}
            >
              <FacilityImage
                orientation="landscape"
                url="https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2344&q=80"
                sx={{ gridColumn: '1', gridRow: '1' }}
              />
              <FacilityImage
                orientation="portrait"
                // sx={{ gridColumn: '2', gridRow: '1/3' }}
                sx={{
                  gridColumn: Phone ? '1' : Tablet ? '1/3' : '2',
                  gridRow: Phone ? '5/7' : Tablet ? '3/5' : '1/3',
                }}
                url="https://images.unsplash.com/photo-1554042317-efd62f19bc95?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1291&q=80"
              />
              <FacilityImage
                orientation="landscape"
                // sx={{ gridColumn: '3', gridRow: '1' }}
                sx={{
                  gridColumn: Phone ? '1' : Tablet ? '2' : '3',
                  gridRow: Phone ? '2' : '1',
                }}
                url="https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2344&q=80"
              />
              <FacilityImage
                orientation="landscape"
                sx={{ gridColumn: '1', gridRow: Phone ? '3' : '2' }}
                url="https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2344&q=80"
              />
              <FacilityImage
                orientation="landscape"
                // sx={{ gridColumn: '3', gridRow: '2' }}
                sx={{
                  gridColumn: Phone ? '1' : Tablet ? '2' : '3',
                  gridRow: Phone ? '4' : '2',
                }}
                url="https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2344&q=80"
              />
            </Box>
          </Grid>
        </HeaderLayout>
      </Grid>
    </Box>
  );
};

export default Facilities;
