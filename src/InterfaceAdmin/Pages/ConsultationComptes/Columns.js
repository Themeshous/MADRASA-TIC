import ToggleSwitch from "./ToggleSwitch";

export const Columns = [
  {
    Header: "Nom",
    accessor:"nom" 
  },
  {
    Header: "Prénom",
    accessor:"prenom" 
   },
   {
    Header: "Email",
    accessor:"email"
  },
  {
    Header: "Téléphone",
    accessor:"numero"
  },
  {
    Header: "Rôle",
    accessor: "role"
  },
  {
    Header: "Profession",
    accessor:"profession"
  },
  { 
    Header: "Etat",
    accessor:"Etat" ,
    
    Cell:({value,row}) => { return ((value=="1") ? <ToggleSwitch label="true" SearchKey={row.original.email.toString()} /> :<ToggleSwitch label="false" SearchKey={row.original.email.toString()} /> )},
  }
]
