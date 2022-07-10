import React from 'react';
import { styled } from '@mui/material/styles';
import { TextField, TextFieldProps } from '@mui/material';

export const StyledTextField: any = styled(TextField)<TextFieldProps>(
  ({ theme }) => ({
    ' .MuiFilledInput-root': {
      backgroundColor: theme.palette.background.default,
      paddingTop: theme.spacing(1),
    },
    ' .MuiFilledInput-inputMultiline': {
      backgroundColor: theme.palette.background.default,
    },
    '&:hover': {
      backgroundColor: theme.palette.background.default,
    },
  }),
);
