import styled from '@emotion/styled';
import {
  ArrowLeft,
  ArrowRight,
  Circle as CircleIcon,
  CircleOutlined as CircleOutlinedIcon,
} from '@mui/icons-material';
import {
  Box,
  BoxProps,
  Button,
  Divider,
  Grid,
  IconButton,
  Typography,
  useMediaQuery,
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
  paginationBottom?: string;
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
  type: 'hero' | 'grid' | 'teacher';
  paginationBottom?: string | number;
  themeColor?: ThemeColor;
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
  type,
  paginationBottom = '2rem',
  themeColor = 'yellow',
}) => {
  const { Tablet } = useResponsive();
  const customSmallPhone = useMediaQuery('(max-width:360px)');
  const theme = useTheme();

  const getIconColor = useMemo(() => {
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
        case 'blue':
          return theme.palette.primary.main;

        default:
          return theme.palette.warning.main;
      }
    }
  }, [themeColor]);

  const getSxIcon = () => {
    return {
      color: getIconColor,
      fontSize: customSmallPhone ? '1rem' : Tablet ? '1.2rem' : '1.4rem',
    };
  };

  return (
    // <Pagination>
    //   {
    <Grid
      container
      spacing={1}
      justifyContent="center"
      sx={{ position: 'absolute', bottom: paginationBottom }}
    >
      {pages.map((page) => {
        const isActivePage: boolean = activePage === page;

        return (
          // <Indicator
          //   key={`${page}-${type}`}
          //   onClick={() => onClick(page)}
          //   active={isActivePage}
          //   // style={{
          //   //   width: Phone ? '1rem' : '2rem',
          //   // }}
          // />
          <Grid item>
            <IconButton size="small" onClick={() => onClick(page)}>
              {isActivePage ? (
                <CircleIcon sx={getSxIcon()} />
              ) : (
                <CircleOutlinedIcon sx={getSxIcon()} />
              )}
            </IconButton>
          </Grid>
        );
      })}
    </Grid>
    //   }
    // </Pagination>
  );
};

const CarouselItem = (props: { image: ImageLink | undefined }) => {
  const { SmallDesktop, Desktop, Tablet, Phone } = useResponsive();

  return (
    <ImageCarousel
      onClick={() => props?.image?.link}
      style={{
        // height: SmallDesktop ? '60vh' : Desktop ? '80vh' : '90vh',
        height: Phone ? '70vw' : Tablet ? '65vw' : '50vw',
      }}
      src={props?.image?.url}
      alt="Taruna Bangsa Banner Image"
    />
  );
};

const HeroCarousel: FC<IElasticCarouselProps> = ({
  itemsToShow = 1,
  images,
  paginationBottom = '2rem',
  themeColor = 'lightblue',
  ...props
}) => {
  const breakPoints = [{ width: 1, itemsToShow }];

  return (
    <StyledElasticCarousel
      {...props}
      breakPoints={breakPoints}
      renderArrow={CarouselArrow}
      showEmptySlots={false}
      renderPagination={({ pages, activePage, onClick }) => (
        // @ts-ignore
        <StyledPagination
          {...{
            pages,
            activePage,
            onClick,
            type: 'hero',
            paginationBottom,
            themeColor,
          }}
        />
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
  paginationBottom,
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
      renderPagination={({ pages, activePage, onClick }) => (
        // @ts-ignore
        <StyledPagination
          {...{
            pages,
            activePage,
            onClick,
            type: 'grid',
            paginationBottom,
            themeColor,
          }}
        />
      )}
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

export const TeacherCarouselItem = ({
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

  const { Desktop, SmallDesktop, Tablet, Phone } = useResponsive();
  const customSmallPhone = useMediaQuery('(max-width:360px)');

  return (
    <Grid
      // mr={SmallDesktop ? theme.spacing(4) : theme.spacing(8)}
      mr={Desktop ? theme.spacing(4) : theme.spacing(8)}
      container
      direction="column"
      spacing={3}
    >
      <Grid item>
        <TeacherImage
          src={teacher.image}
          alt="Guru Taruna Bangsa"
          style={{
            // width: Tablet ? '16rem' : '100%',
            height: customSmallPhone
              ? '80vw'
              : // : Phone
              // ? '18rem'
              Tablet
              ? '18rem'
              : SmallDesktop
              ? '26vw'
              : '28vw',
          }}
        />
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
  paginationBottom,
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
      renderPagination={({ pages, activePage, onClick }) => (
        // @ts-ignore
        <StyledPagination
          {...{
            pages,
            activePage,
            onClick,
            type: 'teacher',
            paginationBottom,
            themeColor,
          }}
        />
      )}
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
