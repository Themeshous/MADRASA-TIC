import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFile } from '@fortawesome/free-solid-svg-icons'
export const Colrapports = [
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
      Header: "Service",
      accessor: "service",
      Cell:({value,row}) => { return (<>{value}   {"  ... "}<a href={`/ResAig/rapports/rapinfo?id=${row.original.id_rap.toString()}`} ><FontAwesomeIcon icon={faFile} className="icon" /></a></>)}
    }
  ] 