import {FETCH_PRODUCTS} from './types';
import {getProducts} from '../../data';

export const fetchProducts=()=>{
    const books=getProducts();
    return{
        type:FETCH_PRODUCTS,
        payload:books
    }
}