import { Outlet } from 'react-router-dom';

import CategoriesList from '../../components/categories-list/category-list.component';

function Home() {
    
    return (
      <div>
        <Outlet/>
        <CategoriesList />
      </div>
     
    );
  };

  export default Home;