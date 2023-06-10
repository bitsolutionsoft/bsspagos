const Aproximar = (params) => {
    const final=Math.round((params + Number.EPSILON)*100)/100
    return final
}
export default Aproximar;