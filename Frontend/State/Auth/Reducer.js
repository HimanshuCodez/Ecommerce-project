const intialState = {
    user: null,
    isLoading: false,
    error: null,
    jwt: null
}
export const authReducer = (state = intialState, action) => {
    switch (action.type) {
        case 'REGISTER_REQUEST':
        case 'LOGIN_REQUEST':
            case 'GET_USER_REQUEST':
                return { ...state, isLoading: true, error: null }

        case 'REGISTER_SUCCESS':
        case 'LOGIN_SUCCESS':
            return { ...state, isLoading: false, error:null, jwt:action.payload }
        case 'GET_USER_SUCCESS':
            return { ...state, isLoading: false, error: null, user:action.payload }

        case 'REGISTER_FAILURE':
        case 'LOGIN_FAILURE':
        case 'GET_USER_FAILURE':
            return { ...state, isLoading: false, user: action.payload }
        case 'LOGOUT':
            return { ...intialState }

        default:
            return state

    }
}