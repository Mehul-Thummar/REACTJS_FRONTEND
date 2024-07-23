import { PRODUCT_GET , PRODUCT_SET } from "../Constant";


export const productAdd = () => {
  return{
    type:PRODUCT_GET,
    data:'demo'
  }
}

export const productSet = (data) => {
  return{
    type:PRODUCT_SET,
    data:data
  }
}