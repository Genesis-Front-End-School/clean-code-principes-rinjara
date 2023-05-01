import React from 'react';
import { Stack } from '@mui/material';
import { StyledPagination } from './PaginationControlled.styled';

const PaginationControlled = ({ totalPages, currentPage, handleChange }) => {
  return (
    <Stack spacing={2} alignContent="center">
      <StyledPagination
        count={totalPages}
        page={currentPage}
        onChange={handleChange}
      />
    </Stack>
  );
};

export default PaginationControlled;
