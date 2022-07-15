import { Box, Typography } from '@mui/material';
import React, { FC } from 'react';
import ListItem from '@/components/ListItem';
import { GridCarousel, GridImageSets } from '@/components/Carousel';
//* Sanity
import { PortableText } from '@portabletext/react';
import { ptComponents } from '@/components/shared/PortableTextComponent';

interface ExculpatoriesProps {
  title: string;
  // exculpatories: string[];
  exculpatories: any;
  exculImageSets: GridImageSets[];
}

const Exculpatories: FC<ExculpatoriesProps> = ({
  title,
  exculpatories,
  exculImageSets,
}) => {
  return (
    <Box>
      <Typography variant="h6" color="whitesmoke">
        {title}
      </Typography>
      <Box mt={3}>
        <PortableText value={exculpatories} components={ptComponents} />
        {/* {exculpatories?.map((exculpatory, idx) => (
          <ListItem key={idx} point={exculpatory} />
        ))} */}
      </Box>
      <Box mt={8}>
        <GridCarousel gridImages={exculImageSets} />
      </Box>
    </Box>
  );
};

export default Exculpatories;
