export default function SortItem(sort,col,setDatos,datos,setSort){
    if(sort==="ASC"){
        let sorted=[...datos.sort((a,b)=> a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1)]
        setDatos(sorted)
        setSort("DESC")
        return
    }
    let sorted=[...datos.sort((a,b)=> a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1)]
    setDatos(sorted)
    setSort("ASC")

}