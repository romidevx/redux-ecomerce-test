//
// ** === PRODUCT REDUCER === **
//

const initialState = {
    product:{},
    loading:false,
    error:''
}
export const productReducer = (state = initialState, action) => {
    //console.log(action);

    switch (action.type) {

        case 'SET_LOADING_TRUE':
            return {
                ...state,
                loading: true,
                product: {},
            };
        
        case 'GET_PRODUCT_SUCCESS':
            return {
                ...state,
                product: action.payload,
            };


        case 'SET_LOADING_FALSE':
            return {
                ...state,
                loading: false,
            };    

        case 'GET_PRODUCT_FAIL':
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        default:
        return state;
    }
};