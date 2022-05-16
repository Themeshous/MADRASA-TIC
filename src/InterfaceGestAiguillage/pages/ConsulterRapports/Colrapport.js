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
      accessor: "service"
    },
    {
      Header: "Etat",
      accessor: "etat",
      Cell:({value}) => { return (<>{value}   {"  ... "}<a href="/ResAig/rapports/rapinfo" ><FontAwesomeIcon icon={faFile} className="icon" /></a></>)}
    }
  ] 