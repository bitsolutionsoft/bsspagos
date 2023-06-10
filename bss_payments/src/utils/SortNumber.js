export default function SortNumber(sort,col,setDatos,datos,setSort){
    if(sort==="ASC"){
        let sorted=[...datos.sort((a,b)=> a[col] > b[col] ? 1 : -1)]
        setDatos(sorted)
        setSort("DESC")
        return
    }
    let sorted=[...datos.sort((a,b)=> a[col] < b[col] ? 1 : -1)]
    setDatos(sorted)
    setSort("ASC")

}