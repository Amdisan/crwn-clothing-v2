import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import {
    CheckoutItemContainer,
    ImageContainer,
    BaseSpan,
    Quantity,
    Arrow,
    RemoveButton,
    Value,
} from './checkout-item.style.jsx';


const CheckoutItem = ({cartItem}) => {
    const {clearItemsFromCart, addItemsToCart, removeItemsFromCart} = useContext(CartContext);

    const {name, imageUrl, price, quantity} = cartItem;

    const removeItemHandler = () => removeItemsFromCart(cartItem);
    const addItemHandler = () => addItemsToCart(cartItem);
    const clearItemHandler = () => clearItemsFromCart(cartItem);

    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <img src={imageUrl} alt={`${name}`}/>
            </ImageContainer>
            <BaseSpan>{name}</BaseSpan>
            <Quantity>
                <Arrow onClick={removeItemHandler}>
                    &#10094;
                </Arrow>
                <Value>{quantity}</Value>     
                <Arrow onClick={addItemHandler}>
                    &#10095;
                </Arrow>
            </Quantity>
            <BaseSpan>{price}</BaseSpan>
            <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
        </CheckoutItemContainer>
    )
}

export default CheckoutItem;