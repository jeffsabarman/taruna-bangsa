import { Button, useTheme } from '@mui/material';
import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';
import React, { FC } from 'react';

interface MenuItemProps extends LinkProps {
  label: string;
}

const MenuItem: FC<MenuItemProps> = ({ label, href, ...props }) => {
  /** Utilities */
  const theme = useTheme();
  const router = useRouter();
  const active = router.pathname === `/${href}`;
  const styles = {
    '&.MuiButton-text': {
      fontSize: '1rem',
      color: active ? theme.palette.primary.main : theme.palette.grey[600],
      textTransform: 'capitalize',
      padding: '0.4rem 2rem',
      '&:hover': {
        color: theme.palette.primary.main,
        backgroundColor: theme.palette.background.paper,
      },
    },
  };

  return (
    <Link href={href} passHref {...props}>
      <Button size="small" sx={styles['&.MuiButton-text']} variant="text">
        {label}
      </Button>
    </Link>
  );
};

export default MenuItem;
