import * as actionType from '../constants/productConstants.js';


export const getProductsReducer = (state = { products: [] }, action) => {
    switch(action.type) {
        case actionType.GET_PRODUCTS_SUCCESS:
            return { products: action.payload }
        case actionType.GET_PRODUCTS_FAIL:
            return { error: action.payload }
        default:
            return state
    }
}

const initialState = { product: {}, loading: false, error: null };

export const getProductDetailsReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionType.GET_PRODUCT_DETAILS_REQUEST:
            return { loading: true}
        case actionType.GET_PRODUCT_DETAILS_SUCCESS:
            return { loading: false, product: action.payload }
        case actionType.GET_PRODUCT_DETAILS_FAIL:
            return { loading: false, error: action.payload }
        case actionType.GET_PRODUCT_DETAILS_RESET:
            return { initialState }
        default: 
            return state
    }
}