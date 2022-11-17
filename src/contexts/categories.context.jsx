import { createContext, useState, useEffect} from 'react';
import { getCategoriesAndDocuments } from '../utils/firebase/firebase.utils.js';

//import SHOP_DATA from '../shop-data.js';


//as the actual value you want to access
export const CategoriesContext = createContext({
    categoriesMap: {},    
});

//as the provider
export const CategoriesProvider = ({children}) => {
    const [categoriesMap, setCategoriesMap] = useState({});
    useEffect(() => {
        const getCategoriesMap = async () =>{
           const categoryMap = await getCategoriesAndDocuments();
           setCategoriesMap(categoryMap);            
        };
        getCategoriesMap();        
    }, []);

   /*
   need this only once to download data to firebase
   useEffect(() => {
        addCollectionAndDocuments('categories', SHOP_DATA);  - from firebase.utils.js
    }, []);
    */

    const value = {categoriesMap};
    
   
    return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
}

