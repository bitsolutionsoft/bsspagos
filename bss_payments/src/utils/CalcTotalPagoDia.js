export const CalcTotalPagoDia = (min, price,extra,pextra) => {
 //   return((min)*(price / 60))
 return ((Number(min)*Number(price))+(Number(extra)*Number(pextra)))
  }