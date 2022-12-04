import { useSelector, useDispatch } from 'react-redux';

import Button, {BUTTON_TYPE_CLASSES} from '../button/button.component';

import { addItemsToCart } from '../../store/cart/cart.action';
import { selectCartItems } from '../../store/cart/cart.selector';


import {ProductCardContainer, Footer, Name, Price} from './product-card.style.jsx';

const ProductCard = ({product}) => {
    const {name, imageUrl, price } = product;

    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);
    
    const addProductToCart = () => dispatch(addItemsToCart(cartItems, product));
    return(
        <ProductCardContainer>
            <img src={imageUrl} alt={`${name}`}/>
            <Footer>
                <Name>{name}</Name>
                <Price className='price'>{price}</Price>
            </Footer>
            <Button btnType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCart}>Add to card</Button>
        </ProductCardContainer>
    )
}

export default ProductCard;