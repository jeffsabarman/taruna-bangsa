import styled from '@emotion/styled';
import { Box, BoxProps, Grid, useTheme } from '@mui/material';
// import Image from 'next/image';
import React, { CSSProperties, FC, ReactNode } from 'react';
import HeaderLayout from '../HeaderLayout';

type ImageProps = {
  orientation: 'landscape' | 'portrait';
};

const Image = styled.img<ImageProps>`
  height: ${(p: any) => (p.orientation === 'landscape' ? '14vw' : '100%')};
  width: 100%;
  object-fit: cover;
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
  return (
    <Box sx={styles.container} {...other}>
      <Image src={url} orientation={orientation} />
    </Box>
  );
};

const Facilities = () => {
  const theme = useTheme();

  return (
    <Box bgcolor={theme.palette.primary.main}>
      <Grid container direction="column">
        <HeaderLayout
          mode="dark"
          title="Facilities"
          subtitle="We are a school that empowers students to thrive in academic excellence; personal, social and emotional growth that are needed for success in their live and livelihood."
        >
          <Grid item xs>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: 1,
                gridTemplateRows: 'repeat(2, 14vw)',
              }}
            >
              <FacilityImage
                orientation="landscape"
                url="https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2344&q=80"
                sx={{ gridColumn: '1', gridRow: '1' }}
              />
              <FacilityImage
                orientation="portrait"
                sx={{ gridColumn: '2', gridRow: '1/3' }}
                url="https://images.unsplash.com/photo-1554042317-efd62f19bc95?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1291&q=80"
              />
              <FacilityImage
                orientation="landscape"
                sx={{ gridColumn: '3', gridRow: '1' }}
                url="https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2344&q=80"
              />
              <FacilityImage
                orientation="landscape"
                sx={{ gridColumn: '1', gridRow: '2' }}
                url="https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2344&q=80"
              />
              <FacilityImage
                orientation="landscape"
                sx={{ gridColumn: '3', gridRow: '2' }}
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
