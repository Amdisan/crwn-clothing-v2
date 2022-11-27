import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';


import {CartIconContainer, ShoppingIconStyled, ItemCount } from './cart-icon.style';

const CartIcon = () => {
    const {isCartOpen, setIsCartOpen, cartCount} = useContext(CartContext);
   
    return(        
        <CartIconContainer onClick={() => setIsCartOpen(!isCartOpen)}>
            <ShoppingIconStyled />
            <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    )
};

export default CartIcon;