import './categories-list.style.scss';
import CategoryItemC from '../category-item-c/category-item-c.component';

function CategoriesList({categories}){
    return(
        <div className='categories-container'>
            {categories.map(cat => (
            <CategoryItemC key = {cat.id} category = {cat}/>
            ))}          
        </div>
    )
}

export default CategoriesList;