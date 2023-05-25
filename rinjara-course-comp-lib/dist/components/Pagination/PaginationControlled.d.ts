import React from 'react';
interface PaginationControlledProps {
    totalPages: number;
    currentPage: number;
    handleChange: (e: React.ChangeEvent<unknown>, page: number) => void;
}
export declare const PaginationControlled: React.FC<PaginationControlledProps>;
export {};
