import React, { useMemo } from 'react'
import { useTable } from 'react-table/dist/react-table.development'
import { useGlobalFilter, useSortBy } from "react-table";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from "react";
import { Columns } from './Columns'
import "./Tableau.css"

export const TableComptes = () => {
  const [items, setItems] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [empty, setempty] = useState(false)
  useEffect(() => {

    const fetchItems = async () => {
      try {
        const response = await fetch("http://localhost:2000/Admin/ConsulterComptes");
        if (!response.ok) throw Error("les données n'ont pas été reçus");
        const listItems = await response.json();
        setItems(listItems.usersTable);
        setFetchError(null);
        if (listItems.length==0) {
          setempty(true)
        }
      } catch (err) {
        setFetchError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    setTimeout(() => fetchItems(), 1000);

  }, [])
 
  const columns = useMemo(() => Columns, [])
  const data = items

  const TableInstance = useTable({
    columns,
    data
  }, useGlobalFilter,
    useSortBy)

  const {
    getTableProps, // table props from react-table
    getTableBodyProps, // table body props from react-table
    headerGroups, // headerGroups, if your table has groupings
    rows, // rows for the table based on the data passed
    prepareRow,// Prepare the row (this function needs to be called for each row before getting the row props)
    state, //table state
    setGlobalFilter //applies global filtering to the table.
  } = TableInstance

  const { globalFilter } = state; 
 
  return (<>
  
    {isLoading? (<p className='loading'>Chargement...</p>):
    fetchError?(<p style={{ color: "red" }}>{`Error: ${fetchError}`}</p>):
    empty?(<p> la liste est vide </p>):
      <div className='milieu-consultation'>
        <div className='barre-recherche'>
          <FontAwesomeIcon icon={faSearch} className="icon" />
          <input placeholder='Entrez le critère de recherche'
            value={globalFilter}
            onChange={(e) => setGlobalFilter(e.target.value)} />
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
      
            }</>
  )
} 
