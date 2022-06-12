import SuppArch from './SuppArch'

export const ColArch= [

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
      Cell:({value,row}) => {return (<div className='col-arch-line'>
          {value}   {"  ... "} < SuppArch Searchkey={row.original.id_post.toString()}/>
          </div>)},
    }
  ] 