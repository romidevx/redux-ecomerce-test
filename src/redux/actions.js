
import axios from 'axios';
const productsUrl = 'https://fakestoreapi.com/products/';


// FILTER BY CATEGORY
export const filterByCategory = (currentItem) => async (dispatch) => {
    dispatch({ type: 'FILTER_PRODUCTS', payload: currentItem });
}


// GET ALL PRODUCTS
export const getProducts = () => async (dispatch) => {
    try {
        dispatch({ type: 'SET_LOADING_TRUE' });
        const {data} = await axios.get(productsUrl);
        dispatch({ type: 'GET_PRODUCTS_SUCCESS', payload: data});
        dispatch({ type: 'SET_LOADING_FALSE' });
    } catch (error) {
        dispatch({ type: 'GET_PRODUCTS_FAIL', payload: error && `** Failed to fetch data...  -- Error: ${error.response.status} -- **`});
        dispatch({ type: 'SET_LOADING_FALSE' });
    }
  };


// GET ONE PRODUCT
export const getProduct = (id) => async (dispatch) => {
    try {
        dispatch({ type: 'SET_LOADING_TRUE' });
        const response = await axios.get(productsUrl + id);
        dispatch({ type: 'GET_PRODUCT_SUCCESS', payload: response.data});
        dispatch({ type: 'SET_LOADING_FALSE' });
    } catch (error) {
        dispatch({ type: 'GET_PRODUCT_FAIL', payload: error && '** Failed to fetch data **  ' + error.message});
        dispatch({ type: 'SET_LOADING_FALSE' });
    }

};



  


  




  
