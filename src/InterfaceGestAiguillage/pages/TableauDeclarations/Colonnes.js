import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPen } from '@fortawesome/free-solid-svg-icons'
export const Colonnes = [
{
      Header: "Titre",
      accessor:"titre" 
    },
    {
      Header: "Date",
      accessor:"date" ,
      Cell:({value})=> { return (<>{value.slice(0,10)}  </>)}
     },
    
    
    {
      Header: "Emetteur",
      accessor: "emetteur"
    },
    {
      Header: "Etat",
      accessor: "etat"
    },
    {
      Header: "Localisation",
      accessor: "localisation",
      Cell:({value,row}) => { return (<>{value}   {"  ... "}<a href={`/responsabled'aiguillage/declaration-info?id=${row.original.id_dec.toString()}`} ><FontAwesomeIcon icon={faPen} className="icon" /></a></>)}
    }
  ] 