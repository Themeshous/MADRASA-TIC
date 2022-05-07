import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPen } from '@fortawesome/free-solid-svg-icons'
export const Colonnes = [
    {
      Header: "Titre",
      accessor:"titre" 
    },
    {
      Header: "Type",
      accessor:"type" 
     },
    {
      Header: "Date signalement",
      accessor: "date"
    },
    {
      Header: "Etat",
      accessor: "etat",
      Cell:({value}) => { return ((value=="En cours") ? <>En cours...<a href='/ResAig/consulter/declaration-info' ><FontAwesomeIcon icon={faPen} className="icon" /></a></>:value)}
    }
  ]
  