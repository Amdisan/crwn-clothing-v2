import {takeLatest, all, call, put} from 'typed-redux-saga/macro';

import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';

import { fetchCategoriesFailed, fetchCategoriesSuccess } from './categories.action';

import { CATEGORIES_ACTION_TYPES } from './categories.types';


export function* fetchCategoriesAsync(){
    try{
        const categoriesArray = yield* call(getCategoriesAndDocuments);
        yield* put(fetchCategoriesSuccess(categoriesArray));//put - same as dispatch but for generators        
    } catch(error){
        yield* put(fetchCategoriesFailed(error as Error));
    }
}

export function* onFetchCategories(){
    yield* takeLatest(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START, fetchCategoriesAsync)
}

export function* categoriesSaga(){
    yield* all([call(onFetchCategories)])
}