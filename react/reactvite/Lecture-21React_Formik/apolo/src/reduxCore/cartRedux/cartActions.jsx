import { ADD_TO_CART , REMOVE_TO_CART , EMPTY_CART  , INCREMENT_TO_CART , DECREMENT_TO_CART } from "../Constant";

export const addToCart = (data) => {
  return{
    type:ADD_TO_CART,
    data : data
  }
}

export const removeToCart = (data) => {
  return{
    type:REMOVE_TO_CART,
    data : data
  }
}

export const emptyCart = () => {
  return{
    type:EMPTY_CART
  }
}


export const incrementToCart = () => {
  return{
    type:INCREMENT_TO_CART
  }
}


export const decrementToCart = () => {
  return{
    type:DECREMENT_TO_CART
  }
}


