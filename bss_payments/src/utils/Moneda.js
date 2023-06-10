const Moneda=(valor)=>{
/*const moneda=Intl.NumberFormat("en-GT",{
    style:"currency",
    currency:"GTQ"
}).format(valor);*/
const moneda=Intl.NumberFormat("en-US",{
    style:"currency",
    currency:"USD"
}).format(valor);
return moneda
}
export default Moneda;