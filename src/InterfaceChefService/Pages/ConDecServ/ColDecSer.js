import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPen } from '@fortawesome/free-solid-svg-icons'
export const ColDecSer = [
     {
      Header: "Titre",
      accessor:"titre" 
    },
    {
      Header: "Date",
      accessor:"date" ,
      Cell:({value}) => { return (<>{value.slice(0,10)}  </>)}
     },
    {
      Header: "Localisation",
      accessor: "localisation",
      Cell:({value,row}) => { return (<>{value}   {"  ... "}<a href={`/chefdeservice/modifier?id=${row.original.id_dec.toString()}`} ><FontAwesomeIcon icon={faPen} className="icon" /></a></>)}
    }
  ] 