import { ADD_TO_WHISHLIST, REMOVE_TO_WISHLIST, EMPTY_WISHLIST, WISHLIST_TO_CART } from "../Constant";


export const addToWishlist = (data) => {
  return {
    type: ADD_TO_WHISHLIST,
    data: data
  }
}

export const removeToWishlist = (data) => {
  return {
    type: REMOVE_TO_WISHLIST,
    data: data
  }
}

export const emptyWishlist = () => {
  return {
    type: EMPTY_WISHLIST

  }
}


export const wishlistToCart = () => {
  return {
    type: WISHLIST_TO_CART
  }
}