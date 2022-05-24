import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFile } from '@fortawesome/free-solid-svg-icons'
export const ColRapServ = [
    {
      Header: "ID",
      accessor:"id_rap" 
    },
    {
      Header: "Date",
      accessor:"date" 
     },
    {
      Header: "Titre",
      accessor:"titre" 
    },
    
    {
      Header: "Etat",
      accessor: "etat",
      Cell:({value,row}) => { return (<>{value}   {"  ... "}<a href={`/chefserv/consulter/rapinfo?id=${row.original.id_rap.toString()}`} ><FontAwesomeIcon icon={faFile} className="icon" /></a></>)}
    }
  ] 