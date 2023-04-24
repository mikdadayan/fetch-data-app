import React, { useEffect, useMemo, useState } from "react";

import Pagination from "../pagination/pagination";
import TableHeader from "./table-header/table-header";
import TableBody from "./table-body/table-body";

import { useFetchData } from "../../hooks/useFetchData";

import { TableData } from "../../utils/types";
import {
  formatDate,
  getViewsColor,
  replaceEmailWithAsterisks,
} from "../../utils/functions";

import "./table-style.css";
import { SortColumn, SortOrder } from "./Table.types";
import FilterGroup, { Filter } from "../filterGroup/filterGroup";
import { Link } from "react-router-dom";
import LinkButton from "../link-button/link-button";

const BASE_URL = "https://retoolapi.dev/zu9TVE/jokes";

const tableColumns = [
  {
    path: "Title",
    label: "Title",
    content: (joke: TableData) => (
      <td key={joke.id + joke.Title}>
        <Link to={{ pathname: `/joke/${joke.id}` }}>{joke.Title}</Link>
      </td>
    ),
  },
  {
    path: "Author",
    label: "Author",
    content: (joke: TableData) => (
      <td key={joke.id + joke.Author}>
        {replaceEmailWithAsterisks(joke.Author)}
      </td>
    ),
  },
  {
    path: "Views",
    label: "Views",
    content: (joke: TableData) => (
      <td key={joke.id + joke.CreatedAt}>
        <span style={{ color: getViewsColor(joke.Views) }}>{joke.Views}</span>
      </td>
    ),
  },
  {
    path: "CreatedAt",
    label: "CreatedAt",
    content: (joke: TableData) => (
      <td key={joke.id + joke.CreatedAt}>{formatDate(joke.CreatedAt)}</td>
    ),
  },
];

const STARTING_PAGE_NUMBER = 1;
const DEFAULT_SORT_COLUMN = { path: "", order: SortOrder.ASC };
const DEFAULT_CREATED_AT_FILTER = {
  id: "all",
  name: "All",
  default: true,
};
const currentYear = new Date().getFullYear();
const createdAtFilters = [
  { id: "all", name: "", default: true },
  { id: "6", name: `${currentYear}`, default: false },
  { id: "5", name: `${currentYear - 1}`, default: false },
  { id: "4", name: `${currentYear - 2}`, default: false },
  { id: "3", name: `${currentYear - 3}`, default: false },
  { id: "2", name: `${currentYear - 4}`, default: false },
  { id: "1", name: `${currentYear - 5}`, default: false },
];
const viewsFilter = [
  { id: "all", name: "All", default: true },
  { id: "1", name: "0-50", default: false },
  { id: "2", name: "50-100", default: false },
  { id: "3", name: "100-150", default: false },
];

function SimpleTable() {
  const [pageSize, setPageSize] = useState<number>(5);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [sortColumn, setSortColumn] = useState<SortColumn>(DEFAULT_SORT_COLUMN);
  const [selectedFilter, setSelectedFilter] = useState<Filter>(
    DEFAULT_CREATED_AT_FILTER
  );
  const [apiUrl, setApiUrl] = useState(
    `${BASE_URL}/?\_page=${currentPage}&\_limit=${pageSize}`
  );

  useEffect(() => {
    setApiUrl(
      `${BASE_URL}/?\_page=${currentPage}&\_limit=${pageSize}&\_sort=${sortColumn.path}&\_order=${sortColumn.order}`
    );
  }, [currentPage, pageSize, sortColumn.path, sortColumn.order]);

  const { data, error, loading } = useFetchData<TableData[]>(apiUrl);

  const jokes = useMemo(() => data, [data]);
  const columns = useMemo(() => tableColumns, []);

  const handleChange = (increment: number) => {
    setCurrentPage((prevPage) => prevPage + Number(increment));
  };
  const handleSort = (sortColumn: SortColumn) => {
    setSortColumn(sortColumn);
  };
  const handleFilterSelect = (item: Filter) => {
    setSelectedFilter(item);
    setCurrentPage(STARTING_PAGE_NUMBER);
  };
  console.log(selectedFilter);

  return (
    <>
      {error && <div>Something went wrong ...</div>}

      {!loading && !jokes?.length && <div>No data found</div>}
      {jokes?.length && (
        <>
          <table className="table">
            <TableHeader
              columns={columns}
              onSort={handleSort}
              sortColumn={sortColumn}
            />
            {loading ? (
              <div>Loading ...</div>
            ) : (
              <TableBody jokes={jokes} columns={columns} />
            )}
          </table>
          {!loading && (
            <>
              <Pagination
                itemsCount={jokes.length}
                currentPage={currentPage}
                pageSize={pageSize}
                onPageChange={handleChange}
                onPageSizeChange={setPageSize}
              />
              <FilterGroup
                items={createdAtFilters}
                selectedItem={selectedFilter}
                onItemSelect={handleFilterSelect}
              />
            </>
          )}
        </>
      )}
    </>
  );
}

export default SimpleTable;
