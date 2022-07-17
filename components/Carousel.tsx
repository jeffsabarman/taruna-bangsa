import styled from '@emotion/styled';
import { ArrowLeft, ArrowRight } from '@mui/icons-material';
import {
  Box,
  BoxProps,
  Button,
  Divider,
  Grid,
  Typography,
  useTheme,
} from '@mui/material';
import { useResponsive } from 'helpers/custom-hooks';
import { ThemeColor } from 'helpers/types';
import React, { FC, ReactNode, useMemo } from 'react';
import ElasticCarousel, {
  ReactElasticCarouselProps,
  // @ts-ignore
  consts,
  RenderPaginationProps,
} from 'react-elastic-carousel';
import { Url } from 'url';
import { TeacherItem } from './Academics/Teachers';

type IndicatorProps = {
  active: boolean;
};

const Pagination = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 2rem 0px;
  position: absolute;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.5);
  padding: 0.6rem;
  border-radius: 0.4rem;
`;

const Indicator = styled.button<IndicatorProps>`
  width: 2rem;
  height: 0.4rem;
  outline: none;
  cursor: pointer;
  border-radius: 1rem;
  margin-right: 0.4rem;
  margin-left: 0.4rem;
  background-color: ${(p: any) => (p.active ? '#001980' : 'lightgrey')};
  border: none;
`;

const ImageCarousel = styled.img`
  width: 100vw;
  object-fit: cover;
  cursor: pointer;
  position: relative;
`;

type ImageLink = {
  url: string;
  link: string;
};

export type GridImageSets = {
  imageSets: {
    1: string;
    2: string;
    3: string;
    4: string;
    5: string;
  };
};

interface IElasticCarouselProps extends Partial<ReactElasticCarouselProps> {
  children?: ReactNode;
  images?: ImageLink[];
  gridImages?: GridImageSets[];
  teachersList?: TeacherItem[];
  themeColor?: ThemeColor;
}

interface CarouselArrowProps {
  type: any;
  onClick: () => void;
  isEdge: boolean;
}

// @ts-ignore
interface PaginationProps extends Partial<RenderPaginationProps> {
  pages: number[];
  activePage: number;
  onClick: (page: number) => void;
}

const StyledElasticCarousel: FC<IElasticCarouselProps> = ({
  children,
  ...props
}) => {
  return (
    // @ts-ignore
    <ElasticCarousel {...props}>{children}</ElasticCarousel>
  );
};

const CarouselArrow: FC<CarouselArrowProps> = ({ type, onClick, isEdge }) => {
  const pointer = type === consts.PREV ? <ArrowLeft /> : <ArrowRight />;
  return (
    <Button
      onClick={onClick}
      disabled={isEdge}
      style={{ visibility: isEdge ? 'hidden' : 'visible' }}
    >
      {pointer}
    </Button>
  );
};

const StyledPagination: FC<PaginationProps> = ({
  pages,
  activePage,
  onClick,
}) => {
  // const { SmallDesktop, Desktop, Phone } = useResponsive();
  const theme = useTheme();

  return (
    <Pagination>
      {pages.map((page) => {
        const isActivePage: boolean = activePage === page;
        return (
          <Indicator
            key={page}
            onClick={() => onClick(page)}
            active={isActivePage}
            // style={{
            //   width: Phone ? '1rem' : '2rem',
            // }}
          />
        );
      })}
    </Pagination>
  );
};

const CarouselItem = (props: { image: ImageLink | undefined }) => {
  const { SmallDesktop, Desktop, Tablet, Phone } = useResponsive();

  return (
    <ImageCarousel
      onClick={() => props?.image?.link}
      style={{
        // height: SmallDesktop ? '60vh' : Desktop ? '80vh' : '90vh',
        height: Phone ? '75vw' : Tablet ? '65vw' : '50vw',
      }}
      src={props?.image?.url}
      alt="Taruna Bangsa Banner Image"
    />
  );
};

const HeroCarousel: FC<IElasticCarouselProps> = ({
  itemsToShow = 1,
  images,
  ...props
}) => {
  const breakPoints = [{ width: 1, itemsToShow }];

  return (
    <StyledElasticCarousel
      {...props}
      breakPoints={breakPoints}
      renderArrow={CarouselArrow}
      renderPagination={({ pages, activePage, onClick }) => (
        // @ts-ignore
        <StyledPagination {...{ pages, activePage, onClick }} />
      )}
    >
      {images?.map((image, idx) => (
        <CarouselItem key={idx} image={image} />
      ))}
    </StyledElasticCarousel>
  );
};

type ImageProps = {
  orientation: 'landscape' | 'portrait';
};

const Image = styled.img<ImageProps>`
  height: ${(p: any) => (p.orientation === 'landscape' ? '14vw' : '100%')};
  width: 100%;
  object-fit: cover;
`;

interface GridImage extends BoxProps {
  url: string;
  orientation: 'landscape' | 'portrait';
}

const GridImage: FC<GridImage> = ({ url, orientation, ...props }) => {
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

const GridCarousel: FC<IElasticCarouselProps> = ({
  itemsToShow = 1,
  gridImages,
  ...props
}) => {
  const breakPoints = [{ width: 1, itemsToShow }];

  return (
    <StyledElasticCarousel
      {...props}
      breakPoints={breakPoints}
      renderArrow={CarouselArrow}
      // @ts-ignore
      // renderPagination={StyledPagination}
      // renderPagination={({ pages, activePage, onClick }) => (
      //   // @ts-ignore
      //   <StyledPagination {...{ pages, activePage, onClick }} />
      // )}
    >
      {gridImages?.map((gridImage, idx) => (
        <Box
          key={idx}
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 1,
            gridTemplateRows: 'repeat(2, 14vw)',
          }}
        >
          <GridImage
            orientation="landscape"
            url={gridImage.imageSets['1']}
            sx={{ gridColumn: '1', gridRow: '1' }}
          />
          <GridImage
            orientation="portrait"
            sx={{ gridColumn: '2', gridRow: '1/3' }}
            url={gridImage.imageSets['2']}
          />
          <GridImage
            orientation="landscape"
            sx={{ gridColumn: '3', gridRow: '1' }}
            url={gridImage.imageSets['3']}
          />
          <GridImage
            orientation="landscape"
            sx={{ gridColumn: '1', gridRow: '2' }}
            url={gridImage.imageSets['4']}
          />
          <GridImage
            orientation="landscape"
            sx={{ gridColumn: '3', gridRow: '2' }}
            url={gridImage.imageSets['5']}
          />
        </Box>
      ))}
    </StyledElasticCarousel>
  );
};

const TeacherImage = styled.img`
  width: 100%;
  object-fit: cover;
  border-radius: 14px;
`;

const TeacherCarouselItem = ({
  teacher,
  themeColor,
}: {
  teacher: TeacherItem;
  themeColor: ThemeColor;
}) => {
  const theme = useTheme();
  const getBorderStyle = useMemo(() => {
    if (themeColor) {
      switch (themeColor) {
        case 'red':
          return theme.palette.secondary.main;
        case 'lightblue':
          return theme.palette.primary.light;
        case 'grey':
          return theme.palette.grey[500];
        case 'white':
          return theme.palette.background.paper;

        default:
          return theme.palette.warning.main;
      }
    }
  }, [themeColor]);

  return (
    <Grid mr={theme.spacing(8)} container direction="column" spacing={3}>
      <Grid item>
        <TeacherImage src={teacher.image} alt="Guru Taruna Bangsa" />
      </Grid>
      <Grid item>
        <Typography
          variant="subtitle2"
          color={themeColor === 'white' ? 'whitesmoke' : undefined}
        >
          {teacher.name}
        </Typography>
        <Typography
          variant="body2"
          color={themeColor === 'white' ? 'whitesmoke' : 'GrayText'}
        >
          {teacher.role}
        </Typography>
      </Grid>
      <Grid item>
        <Divider sx={{ borderWidth: 1.5, borderColor: getBorderStyle }} />
      </Grid>
    </Grid>
  );
};

const TeacherCarousel: FC<IElasticCarouselProps> = ({
  itemsToShow = 3,
  teachersList,
  themeColor,
  ...props
}) => {
  const breakPoints = [{ width: 1, itemsToShow }];

  return (
    <StyledElasticCarousel
      {...props}
      breakPoints={breakPoints}
      renderArrow={CarouselArrow}
      // @ts-ignore
      // renderPagination={StyledPagination}
      // renderPagination={({ pages, activePage, onClick }) => (
      //   // @ts-ignore
      //   <StyledPagination {...{ pages, activePage, onClick }} />
      // )}
    >
      {teachersList?.map((teacher, idx) => (
        <TeacherCarouselItem
          key={idx}
          teacher={teacher}
          themeColor={themeColor}
        />
      ))}
    </StyledElasticCarousel>
  );
};

export { HeroCarousel, GridCarousel, TeacherCarousel };
