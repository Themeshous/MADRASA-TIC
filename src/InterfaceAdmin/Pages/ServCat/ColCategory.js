import SupCatServ from "./SupCatServ"
export const ColCategory = [
    {
      Header: "Catégorie",
      accessor:"categorie" 
    },
    {
      Header: "Service",
      accessor:"service",    
      Cell:({value}) => { return(<div className="ligne-servcie-cat">{value}<SupCatServ keysearch={value} name={"service"}/></div>)}, 
     },
    
    
  ]