import React from 'react';
interface PaginationControlledProps {
    totalPages: number;
    currentPage: number;
    handleChange: (e: React.ChangeEvent<unknown>, page: number) => void;
}
declare const PaginationControlled: React.FC<PaginationControlledProps>;
export default PaginationControlled;
