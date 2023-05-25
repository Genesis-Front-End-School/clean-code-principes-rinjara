import React from 'react'
import { Stack } from '@mui/material'
import { StyledPagination } from './PaginationControlled.styled'

interface PaginationControlledProps {
  totalPages: number
  currentPage: number
  handleChange: (e: React.ChangeEvent<unknown>, page: number) => void
}

export const PaginationControlled: React.FC<PaginationControlledProps> = ({
  totalPages,
  currentPage,
  handleChange
}) => {
  return (
    <Stack spacing={2} alignContent='center'>
      <StyledPagination
        count={totalPages}
        page={currentPage}
        onChange={handleChange}
      />
    </Stack>
  )
}
