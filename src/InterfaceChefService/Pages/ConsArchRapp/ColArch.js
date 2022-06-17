import "../CreateRapport/Rapport.css"
import SuppRapp from './SuppRapp'

export const ColArch= [

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
      Header: "Description",
      accessor: "description",
      Cell:({value,row}) => {return (<div className='col-arch-line'>
          {value}   {"  ... "} <SuppRapp  searchkey={row.original.id_rap.toString()}/>
          </div>)},
    }
  ] 