import React, { useMemo } from 'react'
import { useTable } from 'react-table/dist/react-table.development'
import {useGlobalFilter, useSortBy} from "react-table";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch} from '@fortawesome/free-solid-svg-icons'
import MData from "./MData.json"
import { Columns } from './Columns'
import "./Tableau.css"

export const TableComptes = () => {
    const columns = useMemo(()=> Columns , [])
    const data= useMemo(()=> MData , [])

    const TableInstance = useTable({
       columns,
       data
    },useGlobalFilter,
    useSortBy)

    const {
        getTableProps, // table props from react-table
        getTableBodyProps, // table body props from react-table
        headerGroups, // headerGroups, if your table has groupings
        rows, // rows for the table based on the data passed
        prepareRow ,// Prepare the row (this function needs to be called for each row before getting the row props)
        state, //table state
        setGlobalFilter //applies global filtering to the table.
      } = TableInstance

      const { globalFilter } = state;
  return (
    <div className='milieu-consultation'>
        <div className='barre-recherche'>
        <FontAwesomeIcon icon={faSearch} className="icon" />
        <input placeholder='Entrez le critère de recherche'
               value={globalFilter} 
               onChange={(e) =>setGlobalFilter(e.target.value)} />
        <button type="submit"><i class="fa fa-search"></i></button>
        </div>
      <div className='tableau'>
      <table {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
          {headerGroup.headers.map((column) => (
            <th {...column.getHeaderProps(column.getSortByToggleProps())}>
              {column.render("Header")}
              <span>
                {column.isSorted ? (column.isSortedDesc ? '      ▼' : "      ▲") : "     🗘"}
              </span>
            </th>
          ))}
        </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
    </div>
    </div>
  )
}
