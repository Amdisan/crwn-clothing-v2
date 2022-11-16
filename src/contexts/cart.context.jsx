import { createContext, useState, useEffect} from 'react';

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

//as the provider
export const CartProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);

    useEffect(() => {
        const newCartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
        setCartCount(newCartCount);
    }, [cartItems]);

    useEffect(() => {
        const newCartTotal = cartItems.reduce((sum, item) => sum + item.quantity * item.price, 0);
        setCartTotal(newCartTotal);
    }, [cartItems]);

    const addItemsToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
    };

    const removeItemsFromCart = (cartItemToRemove) => {
        setCartItems(removeCartItem(cartItems, cartItemToRemove));
    };

    const clearItemsFromCart = (cartItemToClear) => {
        setCartItems(clearCartItem(cartItems, cartItemToClear));
    };

    const value = {isCartOpen, setIsCartOpen, addItemsToCart, cartItems, cartCount, removeItemsFromCart, clearItemsFromCart, cartTotal};

   
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

