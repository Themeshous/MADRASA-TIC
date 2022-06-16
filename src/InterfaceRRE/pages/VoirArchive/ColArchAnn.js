import SuppArch from './SuppArch'

export const ColArchAnn= [
  {
      Header: "Titre",
      accessor:"titre" ,
      
    },
   
    {
        Header: "Organisateur",
        accessor:"organisateur" 
       },
    {
      Header: "Date de publication",
      accessor:"datepost",
       Cell:({value,row}) => {return (<div className='col-arch-line'>
          {value.slice(0, 10)}   {"  ... "} < SuppArch Searchkey={row.original.id_post.toString()}/>
          </div>)},
     },
  
  ] 