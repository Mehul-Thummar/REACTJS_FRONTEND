import { ADD_TO_CART, REMOVE_TO_CART, EMPTY_CART, INCREMENT_TO_CART, DECREMENT_TO_CART } from "../Constant";

const getCartDataFromLocalStorage = () => {
  const cartdata = localStorage.getItem('cart')
  return cartdata ? JSON.parse(cartdata) : []
}

const cartReducer = (data = getCartDataFromLocalStorage(), action) => {
  switch (action.type) {
    case ADD_TO_CART:
      console.warn('AddToCartCalled', action);

      const existingItem = data.findIndex(item => item.id === action.data.id)

      let updateCart;

      if (existingItem >= 0) {

        updateCart = data.map(item => item.id === action.data.id ? { ...item, quantity: item.quantity + 1 } : item)

        localStorage.setItem('cart', JSON.stringify(updateCart))

      } else {
        updateCart = [{ ...action.data, quantity: 1 }, ...data]
      }

      localStorage.setItem('cart', JSON.stringify(updateCart))

      return [...updateCart];

    case REMOVE_TO_CART:
      console.warn('RemoveToCartCalled', action);

      const remiderItem = data.filter((item) => item.id !== action.data)

      localStorage.setItem('cart', JSON.stringify(remiderItem))

      return remiderItem

    case EMPTY_CART:
      console.warn('EmptyCartCalled', action);

      localStorage.removeItem('cart')

      return []

    case INCREMENT_TO_CART:

      let updateIncrement = data.map(item => item.id === action.data ? { ...item, quantity: item.quantity + 1 } : item)

      console.log('increment', updateIncrement);

      localStorage.setItem('cart', JSON.stringify(updateIncrement))

      return updateIncrement

    case DECREMENT_TO_CART:

      let updateDecrement = data.map(item => item.id === action.data && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item)

      localStorage.setItem('cart', JSON.stringify(updateDecrement))

      return updateDecrement

    default: return data
  }
}

export default cartReducer