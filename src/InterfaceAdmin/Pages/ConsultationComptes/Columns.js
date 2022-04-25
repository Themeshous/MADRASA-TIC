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
    Cell:({value}) => { return ((value=="1") ?<ToggleSwitch label="true" /> :<ToggleSwitch label="false" />)}
  }
]
