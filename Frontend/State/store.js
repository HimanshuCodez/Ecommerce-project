import {applyMiddleware, combineReducers, legacy_createStore} from "redux"


const rootReducers = combineReducers({
    user: userReducer,
    product: productReducer,
    cart: cartReducer,
    order: orderReducer,
    review: reviewReducer,
    rating: ratingReducer,
    admin: adminReducer,
    category: categoryReducer,
    error: errorReducer,
    loading: loadingReducer,
})
export const store = legacy_createStore(rootReducers,applyMiddleware(thunk))