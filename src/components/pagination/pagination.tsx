import React, { useState } from 'react';
import PageSizeDropDown from '../pageSizeDropDown/pageSize';

import './pagination-style.css';

interface PaginationProps {
  itemsCount: number;
  pageSize: number;
  onPageChange: (sign: number) => void;
  onPageSizeChange: (page: number) => void;
  currentPage: number;
}

const Pagination = ({
  itemsCount,
  pageSize,
  currentPage,
  onPageChange,
  onPageSizeChange,
}: PaginationProps) => {
  const maxPage = Math.ceil(itemsCount / pageSize);

  console.log(maxPage);
  return (
    <>
      <nav>
        <ul className='pagination'>
          <li className='page-item'>
            {currentPage > 1 && (
              <button className='page-link' onClick={() => onPageChange(-1)}>
                {'<'}
              </button>
            )}
            {itemsCount >= pageSize && (
              <button className='page-link' onClick={() => onPageChange(+1)}>
                {'>'}
              </button>
            )}
          </li>
        </ul>
      </nav>
      <PageSizeDropDown
        pageSize={pageSize}
        onPageSizeChange={onPageSizeChange}
      />
    </>
  );
};

export default Pagination;
