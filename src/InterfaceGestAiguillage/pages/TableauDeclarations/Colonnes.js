import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPen } from '@fortawesome/free-solid-svg-icons'
export const Colonnes = [
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
      Header: "Emetteur",
      accessor: "emetteur"
    },
    {
      Header: "Etat",
      accessor: "Supp"
    },
    {
      Header: "Localisation",
      accessor: "localisation",
      Cell:({value}) => { return (<>{value}   {"  ... "}<a href="/responsabled'aiguillage/declaration-info" ><FontAwesomeIcon icon={faPen} className="icon" /></a></>)}
    }
  ] 