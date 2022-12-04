import { createContext, useReducer} from 'react';

import {createAction} from '../utils/reducer/reducer.utils';

const addCartItem = (cartItems, productToAdd) => {
    //find if cartItems contains productToAdd
    const existingCartItem =  cartItems.find(item => item.id === productToAdd.id);

    //if found, increment quantity
    if (existingCartItem){
        return cartItems.map(
            cartItem => cartItem.id === productToAdd.id
            ? {...cartItem, quantity: cartItem.quantity + 1}
            : cartItem
        );
    }

    //return new array with modified cartItems / new cart item

    return [...cartItems, {...productToAdd, quantity: 1}];

};


const removeCartItem = (cartItems, cartItemToRemove) => {
    //find the cart item to remove
    const existingCartItem =  cartItems.find(item => item.id ===  cartItemToRemove.id);

    //check if quantity is equal to 1, if it is remove that item from the cart
    if (existingCartItem.quantity === 1){    
        return cartItems.filter(cartItem => cartItem.id !==  cartItemToRemove.id)
    };
    
    //return back cartitems wih matching cart item with reduced quantity
    return cartItems.map( cartItem => cartItem.id === cartItemToRemove.id
        ?  {...cartItem, quantity: cartItem.quantity - 1} : cartItem
    )};

const clearCartItem = (cartItems, cartItemToClear) => {         
    return cartItems.filter(cartItem => cartItem.id !==  cartItemToClear.id);    
};



//as the actual value you want to access
export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen:  () => {},
    cartItems: [],
    addItemsToCart: () => {},
    removeItemsFromCart: () => {},
    clearItemsFromCart: () => {},
    cartCount: 0,
    cartTotal: 0,    
});

export const CART_ACTION_TYPES = {
    SET_IS_CART_OPEN: 'SET_IS_CART_OPEN',
    SET_CART_ITEMS: 'SET_CART_ITEMS',    
}

const INITIAL_STATE = {
    isCartOpen: false,    
    cartItems: [],    
    cartCount: 0,
    cartTotal: 0,    
};

const cartReducer = (state, action) => {
    const {type, payload} = action;

    switch(type){        
        case CART_ACTION_TYPES.SET_CART_ITEMS:
            return {
                ...state,
                ...payload,
            };
        case CART_ACTION_TYPES.SET_IS_CART_OPEN:
            return {
                ...state,
                isCartOpen: payload,
            }
        
        default: 
            throw new Error(`Unhandled type of ${type} in cartReducer`)
    }
};



export const CartProvider = ({children}) => {

    const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);

    const {isCartOpen, cartItems, cartCount, cartTotal} = state;

    const updateCartItemsReducer = (newCartItems) => {
        const newCartCount = newCartItems.reduce((sum, item) => sum + item.quantity, 0);

        const newCartTotal = newCartItems.reduce((sum, item) => sum + item.quantity * item.price, 0);

        dispatch(
            createAction(CART_ACTION_TYPES.SET_CART_ITEMS,{
                cartItems: newCartItems,
                cartTotal: newCartTotal,
                cartCount: newCartCount
            })
        )
    }

    const setIsCartOpen = (bool) => {
        dispatch(createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, bool))
    }

    const addItemsToCart = (productToAdd) => {
        const newCartItems = addCartItem(cartItems, productToAdd);
        updateCartItemsReducer(newCartItems);
    };

    const removeItemsFromCart = (cartItemToRemove) => {
        const newCartItems = removeCartItem(cartItems, cartItemToRemove);
        updateCartItemsReducer(newCartItems);
    };

    const clearItemsFromCart = (cartItemToClear) => {
        const newCartItems = clearCartItem(cartItems, cartItemToClear);
        updateCartItemsReducer(newCartItems);
    };

    const value = {isCartOpen, setIsCartOpen, addItemsToCart, cartItems, cartCount, removeItemsFromCart, clearItemsFromCart, cartTotal};

   
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

