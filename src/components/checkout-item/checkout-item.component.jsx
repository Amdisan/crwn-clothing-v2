import { useSelector, useDispatch } from 'react-redux';

import { selectCartItems } from '../../store/cart/cart.selector.js';

import { removeItemsFromCart, addItemsToCart, clearItemsFromCart } from '../../store/cart/cart.action.js';

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
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);

    const {name, imageUrl, price, quantity} = cartItem;

    const removeItemHandler = () => dispatch(removeItemsFromCart(cartItems, cartItem));
    const addItemHandler = () => dispatch(addItemsToCart(cartItems, cartItem));
    const clearItemHandler = () => dispatch(clearItemsFromCart(cartItems, cartItem));

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