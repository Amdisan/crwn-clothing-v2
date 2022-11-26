import {CategoriesContainer} from './categories-list.style';
import CategoryItemC from '../category-item-c/category-item-c.component';

function CategoriesList({categories}){
    return(
        <CategoriesContainer>
            {categories.map(cat => (
            <CategoryItemC key = {cat.id} category = {cat}/>
            ))}          
        </CategoriesContainer>
    )
}

export default CategoriesList;


/*Directory in the course */