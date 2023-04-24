import React, { useState } from 'react';

import './pagesize-style.css';

interface PageSizeDropDownProps {
  pageSize: number;
  onPageSizeChange: (page: number) => void;
}

function PageSizeDropdown({
  pageSize,
  onPageSizeChange,
}: PageSizeDropDownProps) {
  const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onPageSizeChange(+event.target.value);
  };

  return (
    <select
      value={`${pageSize}`}
      onChange={handleOptionChange}
      className='dropdown minimal'
    >
      <option value='5'>5</option>
      <option value='10'>10</option>
    </select>
  );
}

export default PageSizeDropdown;
