import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

//REDUCERS
import { productsReducer} from './productsReducer';
import { productReducer}  from './productReducer';

const allReducers = combineReducers({
    products: productsReducer,
    product:  productReducer
});


const store = createStore(
    allReducers,
    applyMiddleware(thunk)
);
  
export default store;