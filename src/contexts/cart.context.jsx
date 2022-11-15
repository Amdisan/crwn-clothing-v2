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

}


//as the actual value you want to access
export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen:  () => {},
    cartItems: [],
    addItemsToCart: () => {},
    cartCount: 0,    
});

//as the provider
export const CartProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
        const newCartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
        setCartCount(newCartCount);
    }, [cartItems]);

    const addItemsToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
    };

    const value = {isCartOpen, setIsCartOpen, addItemsToCart, cartItems, cartCount};

   
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

