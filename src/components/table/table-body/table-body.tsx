import React from "react";
import _ from "lodash";

import { TableData, TableColumns } from "../../../utils/types";

import "../table-style.css";
import "../../filterGroup/filterGroup-style.css"

type TableBodyProps = {
  jokes: TableData[];
  columns: TableColumns[];
};

const TableBody = ({ jokes, columns }: TableBodyProps) => {
  return (
    <tbody>
      {jokes.map((joke) => {
        return (
          <tr key={joke.id}>
            {columns.map((column) =>
              column.content ? (
                column.content(joke)
              ) : (
                <td key={joke.id + column.path}>{_.get(joke, column.label)}</td>
              )
            )}
          </tr>
        );
      })}
    </tbody>
  );
};

export default TableBody;
