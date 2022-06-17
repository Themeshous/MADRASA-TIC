import SupCatServ from "./SupCatServ"

export const ColCategory = [
    {
        Header: "Catégorie",
        accessor: "categorie",
    },
    {
        Header: "Service",
        accessor: "service",
        Cell: ({value,row}) => {
            return (<div className="ligne-servcie-cat">{value}<SupCatServ keysearch={row.original.categorie} name={"categorie"}/></div>)
        },
    },
]