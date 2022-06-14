import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPen } from '@fortawesome/free-solid-svg-icons'
export const ColAnn= [

    {
      Header: "ID",
      accessor:"id_post" 
    },
    {
        Header: "Organisateur",
        accessor:"organisateur" 
       },
    {
      Header: "Date de publication",
      accessor:"datdatepost" 
     },
    {
      Header: "Titre",
      accessor:"titre" ,
      Cell:({value,row}) => { return (<>{value}   {"  ... "}<a href={`/RRE/Consulter/details?id=${row.original.id_post.toString()}`} ><FontAwesomeIcon icon={faPen} className="icon" /></a></>)}
     
    }
  ] 