import './category-item-c.style.scss';

function CategoryItemC({category : {title, imageUrl}}){      
    return(
        <div className='category-c-container'>
          <div className='background-image' style={{backgroundImage: `url(${imageUrl})`}}/>
          <div className='category-c-body-container'>
            <h2>{title}</h2>
            <p>Shop Now</p>
          </div>
        </div>
    )
}

export default CategoryItemC;