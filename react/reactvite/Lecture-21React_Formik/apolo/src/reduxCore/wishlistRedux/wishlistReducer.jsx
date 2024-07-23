import { ADD_TO_WHISHLIST, REMOVE_TO_WISHLIST, EMPTY_WISHLIST, WISHLIST_TO_CART } from "../Constant";


const wishlistReducer = (data = [], action) => {
  switch (action.type) {
    case ADD_TO_WHISHLIST:
      console.warn('AddToWishlistCalled', action);
      
      const existingItem = data.findIndex(item => item.id === action.data.id)

      let updateCart;

      if (existingItem >= 0) {
        updateCart = data.map(item => item.id === action.data.id ? { ...item, quantity: item.quantity + 1 } : item)
      } else {
        updateCart = [{ ...action.data, quantity: 1 }, ...data]
      }

      return [...updateCart]

    case REMOVE_TO_WISHLIST: console.warn('RemoveToWishlistCalled', action);
      const reminderItem = data.filter((item) => item.id !== action.data)
      return [...reminderItem]

    case EMPTY_WISHLIST:
      console.warn('EmptyWishlistCalled', action);
      return data = []

    case WISHLIST_TO_CART: return {

    }
    default: return data
  }
}

export default wishlistReducer