import React from 'react';
import { sortStr } from '../../../utils/functions';

import { TableColumns } from '../../../utils/types';

import '../table-style.css';
import { SortColumn, SortOrder } from '../Table.types';

type TableHeaderProps = {
  columns: TableColumns[];
  sortColumn: SortColumn;
  onSort: (sortColumn: SortColumn) => void;
};

enum ColumnLabel {
  Views = 'Views',
  CreatedAt = 'CreatedAt',
}

const SORTABLE_COLUMNS = [ColumnLabel.Views, ColumnLabel.CreatedAt];

const TableHeader = ({ columns, sortColumn, onSort }: TableHeaderProps) => {
  const raiseSort = (path: string) => {
    const column = { ...sortColumn };
    if (column.path === path) {
      column.order =
        column.order === SortOrder.ASC ? SortOrder.DESC : SortOrder.ASC;
    } else {
      column.path = path;
      column.order = SortOrder.ASC;
    }
    onSort(column);
  };

  return (
    <thead>
      <tr>
        {columns.map((column: any) =>
          SORTABLE_COLUMNS.includes(column.label) ? (
            <th
              key={column.path + column.path}
              onClick={() => column.path && raiseSort(column.path)}
            >
              {column.label}
            </th>
          ) : (
            <th key={column.path}>{column.label}</th>
          )
        )}
      </tr>
    </thead>
  );
};

export default TableHeader;
