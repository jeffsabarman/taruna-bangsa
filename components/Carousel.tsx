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
    <ImageCarousel
      onClick={() => props?.image?.link}
      style={{
        height: SmallDesktop ? '60vh' : Desktop ? '80vh' : '90vh',
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
      {...props}
      breakPoints={breakPoints}
      renderArrow={CarouselArrow}
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
