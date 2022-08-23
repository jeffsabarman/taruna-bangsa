import theme from '@/styles/theme';
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
import { grey } from '@mui/material/colors';
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
  urlSmall?: string;
  link: string;
  alt: string;
};

export type GridImageSets = {
  // imageSets: { url: string; alt: string }[];
  imageSets: {
    // 1: string;
    // 2: string;
    // 3: string;
    // 4: string;
    // 5: string;
    1: {
      url: string;
      alt: string;
    };
    2: {
      url: string;
      alt: string;
    };
    3: {
      url: string;
      alt: string;
    };
    4: {
      url: string;
      alt: string;
    };
    5: {
      url: string;
      alt: string;
    };
  };
};

interface IElasticCarouselProps extends Partial<ReactElasticCarouselProps> {
  children?: ReactNode;
  images?: ImageLink[];
  gridImages?: GridImageSets[];
  teachersList?: TeacherItem[];
  themeColor?: ThemeColor;
  paginationBottom?: string;
  isSetBackground?: boolean;
}

interface CarouselArrowProps {
  type: any;
  onClick: () => void;
  isEdge: boolean;
  themeColor: ThemeColor;
}

// @ts-ignore
interface PaginationProps extends Partial<RenderPaginationProps> {
  pages: number[];
  activePage: number;
  onClick: (page: number) => void;
  type: 'hero' | 'grid' | 'teacher';
  paginationBottom?: string | number;
  themeColor?: ThemeColor;
  isSetBackground?: false;
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

const CarouselArrow: FC<CarouselArrowProps> = ({
  type,
  onClick,
  isEdge,
  themeColor,
}) => {
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
    };
  };

  const pointer =
    type === consts.PREV ? (
      <ArrowLeft sx={getSxIcon()} />
    ) : (
      <ArrowRight sx={getSxIcon()} />
    );
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
  isSetBackground = false,
}) => {
  const { Phone } = useResponsive();
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
      fontSize: customSmallPhone ? '1rem' : Phone ? '1.2rem' : '1.3rem',
    };
  };

  // const getSxIconInactive = () => {
  //   return {
  //     color: `rgba(189, 189, 189, 0.8)`,
  //     // fontSize: customSmallPhone ? '0.4rem' : Tablet ? '0.6rem' : '0.8rem',
  //     fontSize: customSmallPhone ? '0.8rem' : Tablet ? '1rem' : '1.2rem',
  //   };
  // };

  return (
    // <Pagination>
    //   {
    <Grid
      container
      spacing={1}
      justifyContent="center"
      // alignItems="center"
      sx={{
        position: 'absolute',
        bottom: paginationBottom,
      }}
    >
      <Grid
        item
        style={{
          // backgroundColor: 'rgba(255, 255, 255, 0.2)',
          backgroundColor: `rgba(43, 51, 133, ${isSetBackground ? 0.6 : 0})`,
          borderRadius: '0.5rem',
          padding: isSetBackground
            ? Phone
              ? theme.spacing(0.3)
              : theme.spacing(0.5)
            : 0,
          paddingLeft: Phone ? theme.spacing(0.5) : theme.spacing(2),
          paddingRight: Phone ? theme.spacing(0.5) : theme.spacing(2),
          paddingTop: Phone ? theme.spacing(0.2) : theme.spacing(0.5),
        }}
      >
        <Grid container spacing={1}>
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
                    // <CircleOutlinedIcon sx={getSxIcon()} />
                    <CircleIcon
                      sx={getSxIcon()}
                      // sx={getSxIconInactive()}
                      style={{ color: `rgba(189, 189, 189, 0.8)` }}
                      // style={{ color: grey[400] }}
                    />
                  )}
                </IconButton>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </Grid>
    //   }
    // </Pagination>
  );
};

const CarouselItem = (props: { image: ImageLink | undefined }) => {
  const { SmallDesktop, Desktop, Tablet, Phone } = useResponsive();
  // const customDesktop = useMediaQuery("(max-width:)")

  return (
    <ImageCarousel
      onClick={() => window.open(props?.image?.link)}
      style={{
        // height: SmallDesktop ? '60vh' : Desktop ? '80vh' : '90vh',
        // height: Phone ? '70vw' : Tablet ? '65vw' : '50vw',
        // height: Phone ? '70vw' : Tablet ? '65vw' : Desktop ? '55vw' : '50vw',
        height: Phone ? '70vw' : Tablet ? '65vw' : Desktop ? '55vw' : '48vw',
      }}
      src={
        Phone ? props?.image?.urlSmall || props?.image?.url : props?.image?.url
      }
      // alt="Taruna Bangsa Banner Image"
      alt={props?.image?.alt}
    />
  );
};

const HeroCarousel: FC<IElasticCarouselProps> = ({
  itemsToShow = 1,
  images,
  paginationBottom = '2rem',
  themeColor = 'lightblue',
  isSetBackground = true,
  ...props
}) => {
  const breakPoints = [{ width: 1, itemsToShow }];

  return (
    <StyledElasticCarousel
      {...props}
      breakPoints={breakPoints}
      // renderArrow={CarouselArrow}
      renderArrow={({ type, onClick, isEdge }) => (
        <CarouselArrow {...{ type, onClick, isEdge, themeColor }} />
      )}
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
            isSetBackground,
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
  alt: string;
  orientation: 'landscape' | 'portrait';
}

const GridImage: FC<GridImage> = ({ url, alt, orientation, ...props }) => {
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
        alt={alt}
        orientation={orientation}
        style={{
          height:
            orientation === 'landscape'
              ? Phone
                ? '48vw'
                : Tablet
                ? '100%'
                : '14vw'
              : '100%',
        }}
      />
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
  const { Phone, Tablet } = useResponsive();

  // TODO: HANDLE RESPONSIVE

  return (
    <StyledElasticCarousel
      {...props}
      breakPoints={breakPoints}
      // renderArrow={CarouselArrow}
      renderArrow={({ type, onClick, isEdge }) => (
        <CarouselArrow {...{ type, onClick, isEdge, themeColor }} />
      )}
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
            gridTemplateColumns: Phone
              ? 'repeat(2, 100%)'
              : Tablet
              ? 'repeat(2, 1fr)'
              : 'repeat(3, 1fr)',
            gap: Phone ? 3 : Tablet ? 2 : 1,
            gridTemplateRows: Phone
              ? 'repeat(6, 48vw)'
              : Tablet
              ? 'repeat(3, 26vw)'
              : 'repeat(2, 14vw)',
          }}
        >
          <GridImage
            orientation="landscape"
            // url={gridImage.imageSets['1']}
            url={gridImage.imageSets['1']?.url}
            alt={gridImage.imageSets['1']?.alt}
            // url={gridImage.imageSets[0]?.url}
            // alt={gridImage.imageSets[0]?.alt}
            sx={{ gridColumn: '1', gridRow: '1' }}
          />
          <GridImage
            orientation="portrait"
            sx={{
              gridColumn: Phone ? '1' : Tablet ? '1/3' : '2',
              gridRow: Phone ? '5/7' : Tablet ? '3/5' : '1/3',
            }}
            // url={gridImage.imageSets['2']}
            url={gridImage.imageSets['2']?.url}
            alt={gridImage.imageSets['2']?.alt}
            // url={gridImage.imageSets[1]?.url}
            // alt={gridImage.imageSets[1]?.alt}
          />
          <GridImage
            orientation="landscape"
            sx={{
              gridColumn: Phone ? '1' : Tablet ? '2' : '3',
              gridRow: Phone ? '2' : '1',
            }}
            // url={gridImage.imageSets['3']?.url}
            // alt={gridImage.imageSets['3']?.alt}
            url={gridImage.imageSets[2]?.url}
            alt={gridImage.imageSets[2]?.alt}
          />
          <GridImage
            orientation="landscape"
            sx={{ gridColumn: '1', gridRow: Phone ? '3' : '2' }}
            // url={gridImage.imageSets['4']?.url}
            // alt={gridImage.imageSets['4']?.alt}
            url={gridImage.imageSets[3]?.url}
            alt={gridImage.imageSets[3]?.alt}
          />
          <GridImage
            orientation="landscape"
            sx={{
              gridColumn: Phone ? '1' : Tablet ? '2' : '3',
              gridRow: Phone ? '4' : '2',
            }}
            // url={gridImage.imageSets['5']?.url}
            // alt={gridImage.imageSets['5']?.alt}
            url={gridImage.imageSets[4]?.url}
            alt={gridImage.imageSets[4]?.alt}
          />
        </Box>
      ))}
    </StyledElasticCarousel>
  );
};

const TeacherImage = styled.img`
  width: 100%;
  height: 24rem;
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

  const { Desktop, SmallDesktop, Tablet, Phone, BigDesktop } = useResponsive();
  const customSmallPhone = useMediaQuery('(max-width:360px)');

  return (
    <Grid
      // mr={SmallDesktop ? theme.spacing(4) : theme.spacing(8)}
      mr={Desktop ? theme.spacing(4) : theme.spacing(8)}
      // ml={theme.spacing(1)}
      container
      direction="column"
      spacing={2}
      maxWidth={SmallDesktop ? '20rem' : BigDesktop ? '20vw' : '24vw'}
    >
      <Grid item>
        <TeacherImage
          src={teacher.image}
          alt="Guru Taruna Bangsa"
          style={{
            // maxWidth: Tablet ? '16rem' : '20rem',
            height: customSmallPhone
              ? '18rem'
              : // : Phone
              // ? '18rem'
              Tablet
              ? '18rem'
              : SmallDesktop
              ? '26vw'
              : BigDesktop
              ? '24vw'
              : '26vw',
            marginRight: '2rem',
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
          variant={Phone ? 'caption' : 'body2'}
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
      // renderArrow={CarouselArrow}
      renderArrow={({ type, onClick, isEdge }) => (
        <CarouselArrow {...{ type, onClick, isEdge, themeColor }} />
      )}
      showArrows={true}
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
          // key={teacher?.name}
          teacher={teacher}
          themeColor={themeColor}
        />
      ))}
    </StyledElasticCarousel>
  );
};

export { HeroCarousel, GridCarousel, TeacherCarousel };
