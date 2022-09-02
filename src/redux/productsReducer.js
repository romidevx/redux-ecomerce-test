//
// ** === ALL PRODUCTS REDUCER === **
//

const initialState = {
    products:[],
    filteredProducts:[],
    loading:false,
    error:'',
}

// ** === PRODUCTS REDUCER === **
export const productsReducer = (state = initialState, action) => {
        //console.log(action);
    
        switch (action.type) {
            
            case 'SET_LOADING_TRUE':
            return {
                ...state,
                loading: true,
                products: [],
                filteredProducts:[],
            };
    
            case 'GET_PRODUCTS_SUCCESS':
            return {
                ...state,
                products: [...action.payload],
            };

            case 'SET_LOADING_FALSE':
            return {
                ...state,
                loading: false,
            };
    
            case 'GET_PRODUCTS_FAIL':
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

            case 'FILTER_PRODUCTS':
            if(action.payload === 'all'){
                return {
                    ...state,
                    filteredProducts: [...state.products],
                };
            }else{
                const newItems = state.products.filter(productItem => productItem.category === action.payload );
                return {
                    ...state,
                    filteredProducts: [...newItems],
                };
            };
                
            
    
            default:
            return state;
        }
    };


    



    



