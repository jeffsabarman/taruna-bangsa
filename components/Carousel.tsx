import styled from '@emotion/styled';
import { ArrowLeft, ArrowRight } from '@mui/icons-material';
import { Button } from '@mui/material';
import { useResponsive } from 'helpers/custom-hooks';
import React, { FC, ReactNode } from 'react';
import ElasticCarousel, {
  ReactElasticCarouselProps,
  // @ts-ignore
  consts,
  RenderPaginationProps,
} from 'react-elastic-carousel';

const Pagination = styled.div`
  display: flex;
  flex-direction: row;
  margin: 2rem 0px;
`;

const Indicator = styled.button`
  width: 2rem;
  height: 0.4rem;
  outline: none;
  cursor: pointer;
  border-radius: 1rem;
  margin-right: 1rem;
  background-color: ${(p: any) => (p.active ? '#001980' : 'none')};
  border: none;
`;

type ImageLink = {
  url: string;
  link: string;
};

interface IElasticCarouselProps extends Partial<ReactElasticCarouselProps> {
  children?: ReactNode;
  images?: ImageLink[];
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
  return (
    <Pagination>
      {pages.map((page) => {
        const isActivePage: boolean = activePage === page;
        return (
          <Indicator
            key={page}
            onClick={() => onClick(page)}
            // @ts-ignore
            active={isActivePage}
          />
        );
      })}
    </Pagination>
  );
};

const CarouselItem = (props: { image: ImageLink | undefined }) => {
  const { SmallDesktop, Desktop } = useResponsive();

  return (
    <img
      onClick={() => props?.image?.link}
      style={{
        height: SmallDesktop ? '50vh' : Desktop ? '72vh' : '82vh',
        width: '100vw',
        objectFit: 'cover',
        cursor: 'pointer',
      }}
      src={props?.image?.url}
      alt="Taruna Bangsa Banner Image"
    />
  );
};

const Carousel: FC<IElasticCarouselProps> = ({
  itemsToShow = 1,
  images,
  ...props
}) => {
  const breakPoints = [{ width: 1, itemsToShow }];

  return (
    <StyledElasticCarousel
      breakPoints={breakPoints}
      renderArrow={CarouselArrow}
      {...props}
      // @ts-ignore
      renderPagination={StyledPagination}
    >
      {images?.map((image, idx) => (
        <CarouselItem key={idx} image={image} />
      ))}
    </StyledElasticCarousel>
  );
};

export default Carousel;
