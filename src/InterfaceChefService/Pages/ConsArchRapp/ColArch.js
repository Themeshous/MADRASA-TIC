import "../CreateRapport/Rapport.css"
import SuppRapp from './SuppRapp'

export const ColArch= [

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
      Header: "Description",
      accessor: "description",
      Cell:({value,row}) => {return (<div className='col-arch-line'>
          {value}   {"  ... "} <SuppRapp  searchkey={row.original.id_rap.toString()}/>
          </div>)},
    }
  ] 