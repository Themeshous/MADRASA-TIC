import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPen } from '@fortawesome/free-solid-svg-icons'
export const ColDecSer = [
    {
      Header: "ID",
      accessor:"id_dec" 
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
      Header: "Localisation",
      accessor: "localisation",
      Cell:({value,row}) => { return (<>{value}   {"  ... "}<a href={`/chefdeservice/modifier?id=${row.original.id_dec.toString()}`} ><FontAwesomeIcon icon={faPen} className="icon" /></a></>)}
    }
  ] 