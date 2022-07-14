import styled from '@emotion/styled';

type PolygonProps = {
  size?: 'xs' | 'sm' | 'lg' | 'xl' | '2xl' | 'md';
  primary?: boolean;
  secondary?: boolean;
  tertiary?: boolean;
  grey?: boolean;
};

export const Polygon = styled.div<PolygonProps>`
  width: 0;
  height: 0;
  border-style: solid;
  border-width: ${(p: any) =>
    p.size === 'xs'
      ? '8px 0 8px 12px'
      : p.size === 'sm'
      ? '14px 0 14px 20px'
      : p.size === 'lg'
      ? '18px 0 18px 24px'
      : p.size === '2xl'
      ? '48px 0 48px 58px'
      : '24px 0 24px 36px'};
  display: inline-block;
  border-color: ${(p: any) =>
    p.primary
      ? 'transparent transparent transparent #00c4f0'
      : p.secondary
      ? 'transparent transparent transparent #FF0000'
      : p.tertiary
      ? 'transparent transparent transparent #F36621'
      : 'transparent transparent transparent #FBBA00'};
`;

export const BackwardPolygon = styled.div<PolygonProps>`
  width: 0;
  height: 0;
  border-style: solid;
  border-width: ${(p: any) =>
    p.size === 'xs'
      ? '8px 12px 8px 0px'
      : p.size === 'sm'
      ? '14px 20px 14px 0px'
      : p.size === 'lg'
      ? '18px 24px 18px 0px'
      : p.size === '2xl'
      ? '48px 58px 48px 0px'
      : '24px 28px 24px 0px'};
  display: inline-block;
  border-color: ${(p: any) =>
    p.primary
      ? 'transparent #00c4f0 transparent transparent'
      : p.secondary
      ? 'transparent #FF0000 transparent transparent'
      : p.tertiary
      ? 'transparent #F36621 transparent transparent'
      : p.grey
      ? 'transparent #9e9e9e transparent transparent '
      : 'transparent #FBBA00 transparent transparent'};
`;
