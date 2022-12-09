import {takeLatest, all, call, put} from 'redux-saga/effects';

import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';

import { fetchCategoriesFailed, fetchCategoriesSuccess } from './categories.action';

import { CATEGORIES_ACTION_TYPES } from './categories.types';


export function* fetchCategoriesAsync(){
    try{
        const categoriesArray = yield call(getCategoriesAndDocuments, 'categories');
        yield put(fetchCategoriesSuccess(categoriesArray));//put - same as dispatch but for generators        
    } catch(error){
        yield put(fetchCategoriesFailed(error));
    }
}

export function* onFetchCategories(){
    yield takeLatest(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START, fetchCategoriesAsync)
}

export function* categoriesSaga(){
    yield all([call(onFetchCategories)])
}