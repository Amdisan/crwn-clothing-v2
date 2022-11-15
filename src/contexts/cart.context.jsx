import { createContext, useState} from 'react';


//as the actual value you want to access
export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen:  () => null ,
});

//as the provider
export const CartProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const value = {isCartOpen, setIsCartOpen};

   
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

