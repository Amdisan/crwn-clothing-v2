import './categories-list.style.scss';
import CategoryItem from '../category-item/category-item.component';

function CategoriesList({categories}){
    return(
        <div className='categories-container'>
            {categories.map(cat => (
            <CategoryItem key = {cat.id} category = {cat}/>
            ))}          
        </div>
    )
}

export default CategoriesList;