import SupCatServ from "./SupCatServ"
export const ColService= [
    {
      Header: "Service",
      accessor:"service" ,
       Cell:({value}) => { return(<div className="ligne-servcie-cat">{value}<SupCatServ keysearch={value} name={"service"}/></div>)}, 
     
    },
  ]
