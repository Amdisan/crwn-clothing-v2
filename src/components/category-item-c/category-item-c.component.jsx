import  './category-item-c.style';
import {BackgroundImage, Body, CategoryItemCContainer} from './category-item-c.style';

function CategoryItemC({category : {title, imageUrl}}){      
    return(
        <CategoryItemCContainer>
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