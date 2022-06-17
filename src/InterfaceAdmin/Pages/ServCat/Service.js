import React, { useMemo, useState, useEffect } from 'react'
import { useTable } from 'react-table/dist/react-table.development'
import { useSortBy } from "react-table";
import { ColService } from './ColService'
import axios from 'axios';
const Service = () => {
  const [Services, setServices] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const [Showaddserv, setShowaddserv] = useState(false)
  const [values, setvalues] = useState({ newservice: '' });
  const [errors, seterrors] = useState({})
  useEffect(() => {

    const fetchItems = async () => {
      try {
        const response = await fetch("http://localhost:2000/service");
        if (!response.ok) throw Error("les données n'ont pas été reçus");
        const listItems = await response.json();
        setServices(listItems);
        setFetchError(null);
      } catch (err) {
        setFetchError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    setTimeout(() => fetchItems(), 1000);

  }, [Services])

  const columns = useMemo(() => ColService, [])
  const data =Services

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
    if (Services.includes(values.newservice)) {//si new service appartient à la table
      errors.newservice = "Ce service existe déjà"
    }
    return errors;
  }
  const HandleSubmit = e => {
    e.preventDefault();
    seterrors(validate(values));

  }

  const Ajouterservice = () => {
   
    //ajouter le service si il n y a pas d erreur
    if (!(Services.includes(values.newservice))) {
       setShowaddserv(false)
       axios.post("http://localhost:2000/service",{service:values.newservice})
    }else{
      setShowaddserv(true)
    }
    

  }

  return (
    <div>
      {isLoading ? (<p className='loading'>Chargement...</p>) :
        fetchError ? (<p style={{ color: "red" }}>{`Error: ${fetchError}`}</p>) :
          (Services.length === 0) ? (<p className='loading' > la table est vide!</p>) :
            <div className='services-categorie'>
              <button className='services-categorie-ajouter' onClick={() => { setShowaddserv(true) }}>Ajouter un service +</button>
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
              {Showaddserv && <div className='services-categorie-confirmation'>
                <h4 className="services-categorie-conf-text">
                  Entrez le nom de nouveau service ?
                </h4>
                <form onSubmit={HandleSubmit}>
                  <input
                    id='newservice'
                    type="text"
                    name='newservice'
                    className='form-input-declaration-services-categorie'
                    placeholder='Nom de nouveau service'
                    value={values.newservice}
                    onChange={handlechange} />
                  {errors.newservice && <p>{errors.newservice}</p>}
                  <div className="btn-in-line">
                    <button className='btn-conf annuler' type='submit' onClick={() => setShowaddserv(Showaddserv => false)}>
                      <p> Annuler</p>
                    </button>
                    <button className='btn-conf confirmer' type='submit' onClick={Ajouterservice}>
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

export default Service
/*{Showsuppservice && <div className="confirmation">
                  <h4 className="texte-xonfirmation">
                    voulez vraiment supprimer ce service?
                  </h4>
                  <div className="btn-in-line">
                    <button className='btn-conf annuler' type='submit' onClick={() => setShowsuppservice(Showsuppservice => false)}>
                      <p> non</p>
                    </button>
                    <button className='btn-conf confirmer' type='submit' onClick={supprimerserv(serv)}>
                      <p> oui</p>
                    </button>
                  </div>
              </div>}*/
/*    {Showaddserv && <div className='Ajouter-serv'>
    <h4 className="texte-xonfirmation">
      Entrez le nom de nouveau service ?
    </h4>
    <input
      id='newservice'
      type="text"
      name='newservice'
      className='form-input-declaration-rej'
      placeholder='Nom de nouveau service'
      value={values.newservice}
      onChange={handlechange} />
       {errors.newservice&& <p>{errors.newservice}</p>}
    <div className="btn-in-line">
      <button className='btn-conf annuler' type='submit' onClick={() => setShowaddserv(Showaddserv => false)}>
        <p> Annuler</p>
      </button>
      <button className='btn-conf confirmer' type='submit' onSubmit={HandleSubmit}
        onClick={Ajouterservice}>
        <p> confirmer</p>
      </button>
    </div>
    </div>
    }*/