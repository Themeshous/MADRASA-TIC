import React, { useMemo, useState, useEffect } from 'react'
import { useTable } from 'react-table/dist/react-table.development'
import { useSortBy } from "react-table";
import { ColCategory } from './ColCategory'
import axios from 'axios';
const Categorie = () => {
  const [categorie, setcategorie] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const [Showaddcat, setShowaddcat] = useState(false)
  const [values, setvalues] = useState({ service: '', category: '' });
  const [errors, seterrors] = useState({})
  useEffect(() => {

    const fetchItems = async () => {
      try {
        const response = await fetch("http://localhost:2000/category");
        if (!response.ok) throw Error("les données n'ont pas été reçus");
        const listItems = await response.json();
        setcategorie(listItems);
        setFetchError(null);
      } catch (err) {
        setFetchError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    setTimeout(() => fetchItems(), 1000);

  }, [categorie])

  const columns = useMemo(() => ColCategory, [])
  const data = categorie

  const TableInstance = useTable({
    columns,
    data
  }, useSortBy)

  const {
    getTableProps, // table props from react-table
    getTableBodyProps, // table body props from react-table
    headerGroups, // headerGroups, if your table has groupings
    rows, // rows for the table based on the data passed
    prepareRow,// Prepare the row (this function needs to be called for each row before getting the row props)
    state, //table state
  } = TableInstance


  const handlechange = e => {
    const { name, value } = e.target
    setvalues({
      ...values,
      [name]: value
    })
  }
  const validate = (values) => {
    let errors = {}
    if (!values.service.trim()) {
      errors.service = "Ce champs ne doit pas etre vide"
    }
    if (!values.category.trim()) {
      errors.category = "Ce champs ne doit pas etre vide"
    }
    return errors;
  }
  const HandleSubmit = e => {
    e.preventDefault();
    seterrors(validate(values));

  }

  const Ajoutercategorie = () => {

    //ajouter le service si il n y a pas d erreur
    if (values.category && values.service) {
      setShowaddcat(false)
      axios.post("http://localhost:2000/category", {
        category: {
          categorie: values.category,
          service: values.service
        }
      })
    } else {
      setShowaddcat(true)
    }


  }

  return (
    <div>
      {isLoading ? (<p className='loading'>Chargement...</p>) :
        fetchError ? (<p style={{ color: "red" }}>{`Error: ${fetchError}`}</p>) :
          (categorie.length === 0) ? (<p className='loading' > la table est vide!</p>) :
            <div className='services-categorie'>
              <button className='services-categorie-ajouter' onClick={() => { setShowaddcat(true) }}>Ajouter une catégorie +</button>
              <div className='services-categorie-side'>
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
              {Showaddcat && <div className='services-categorie-confirmation'>
                <h4 className="services-categorie-conf-text">
                  Entrez le nom de nouveau service ?
                </h4>
                <form onSubmit={HandleSubmit} className='form-category'>
                  <div className='form-iput-catégory'>
                    <input
                      id='category'
                      type="text"
                      name='category'
                      className='form-input-declaration-services-categorie'
                      placeholder='Nom de nouvelle catégorie'
                      value={values.category}
                      onChange={handlechange} />
                    {errors.categorie && <p className='remarque-error-category'>{errors.categorie}</p>}
                  </div>
                  <div className='form-iput-catégory'>
                    <input
                      id='service'
                      type="text"
                      name='service'
                      className='form-input-declaration-services-categorie'
                      placeholder='Nom service attaché'
                      value={values.service}
                      onChange={handlechange} />
                    {errors.service && <p className='remarque-error'>{errors.service}</p>}
                  </div>
                  <div className="btn-in-line">
                    <button className='btn-conf annuler' type='submit' onClick={() => setShowaddcat(Showaddcat => false)}>
                      <p> Annuler</p>
                    </button>
                    <button className='btn-conf confirmer' type='submit' onClick={Ajoutercategorie}>
                      <p> confirmer</p>
                    </button>
                  </div>
                </form>
              </div>
              }
            </div>}

    </div>
  )
}

export default Categorie