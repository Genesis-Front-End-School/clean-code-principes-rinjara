import React from 'react';
import { Stack, Pagination } from '@mui/material';

const PaginationControlled = ({ totalPages, currentPage, handleChange }) => {
  return (
    <Stack spacing={2} alignContent="center">
      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={handleChange}
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '50px',
        }}
      />
    </Stack>
  );
};

export default PaginationControlled;
