
export const ADD_PRODUCT = "ADD_PRODUCT";

const addProductToCart = (product, state) => {
    console.log("adding product", product);
    const updatedCart = [...state.cart];
    const updatedItemIndex = updatedCart.findIndex(
      item => item.id === product.id
    );
  
    if (updatedItemIndex < 0) {
      updatedCart.push({ ...product, quantity: 1 });
    } else {
      const updatedItem = {
        ...updatedCart[updatedItemIndex]
      };
      updatedItem.quantity++;
      updatedCart[updatedItemIndex] = updatedItem;
    }
  
    return { ...state, cart: updatedCart };
  };
  