export default function products(state = {}, action) {
  switch (action.type) {
    case 'LOAD_PRODUCTS':
      return {
        ...state,
        products: action.response,
      }
    default:
      return state
  }
}