import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

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