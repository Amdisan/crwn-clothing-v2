import { useSelector } from 'react-redux';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import { selectCartTotal, selectCartItems } from '../../store/cart/cart.selector';

import {
    CheckoutContainer,
    CheckoutHeader,
    Total,
    HeaderBlock,
} from './checkout.style.jsx';

const Checkout = () => {
    const cartItems = useSelector(selectCartItems);
    const cartTotal = useSelector(selectCartTotal);
    return (
        <CheckoutContainer>
            <CheckoutHeader>
                <HeaderBlock>
                    <span>Product</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Description</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Quantity</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Price</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Remove</span>
                </HeaderBlock>
            </CheckoutHeader>            
                {cartItems.map(item => {
                                      
                    return (
                      
                        <CheckoutItem key={item.id} cartItem={item}/>
                            
                )})}
            <Total>Total: ${cartTotal}</Total>                          
        </CheckoutContainer>
    )
}

export default Checkout;