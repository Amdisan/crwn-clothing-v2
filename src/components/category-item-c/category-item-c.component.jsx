import { useNavigate } from 'react-router-dom';

import {BackgroundImage, Body, CategoryItemCContainer} from './category-item-c.style';

function CategoryItemC({category : {title, imageUrl, route}}){  
    const navigate  = useNavigate();
    const onNavigateHandler = () => navigate(route);
    return(
        <CategoryItemCContainer onClick={onNavigateHandler}>
          <BackgroundImage imageUrl={imageUrl}
          />
          <Body>
            <h2>{title}</h2>
            <p>Shop Now</p>
          </Body>
        </CategoryItemCContainer>
    )
}

export default CategoryItemC;

/*directory item in the course */