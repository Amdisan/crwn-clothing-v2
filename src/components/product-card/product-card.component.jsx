import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import Button, {BUTTON_TYPE_CLASSES} from '../button/button.component';


import {ProductCardContainer, Footer, Name, Price} from './product-card.style.jsx';

const ProductCard = ({product}) => {
    const {name, imageUrl, price } = product;
    const {addItemsToCart} = useContext(CartContext);
    const addProductToCart = () => addItemsToCart(product);
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