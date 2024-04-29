import {
    SELECT_ROLE_ACTION,
    LOADING_TOGGLE_ACTION,
    LOGIN_CONFIRMED_ACTION,
    LOGIN_FAILED_ACTION,
    LOGOUT_ACTION,
    SIGNUP_CONFIRMED_ACTION,
    SIGNUP_FAILED_ACTION,
} from '../actions/AuthActions';

const initialState = {
    auth: {
        email: '',
        idToken: '',
        localId: '',
        expiresIn: '',
        refreshToken: '',
        
    },
    selectedRole: '',
    isAuthenticated: false,
    userRole: '',
    errorMessage: '',
    successMessage: '',
    showLoading: false,
};


export function AuthReducer(state = initialState, action) {
    switch (action.type) {
        case SELECT_ROLE_ACTION:
            return {
                ...state,
                selectedRole: action.payload,
                userRole: action.payload, 
            };
        case  SIGNUP_CONFIRMED_ACTION:
            return {
                ...state,
                auth: action.payload,
                errorMessage: '',
                successMessage: 'Signup Successfully Completed',
                showLoading: false,
            };
        
        case  LOGIN_CONFIRMED_ACTION:
            return {
                ...state,
                auth: action.payload,
                selectedRole: action.payload.userRole,
                userRole: action.payload.userRole,
                errorMessage: '',
                successMessage: 'Login Successfully Completed',
                showLoading: false,
            };
        

        case  LOGOUT_ACTION:
            return {
                ...state,
                errorMessage: '',
                userRole: '',
                successMessage: '',
                auth: {
                    email: '',
                    idToken: '',
                    localId: '',
                    expiresIn: '',
                    refreshToken: '',
                },
            };
        

            case SIGNUP_FAILED_ACTION:
                case LOGIN_FAILED_ACTION:
                  return {
                    ...state,
                    errorMessage: action.payload,
                    successMessage: '',
                    showLoading: false,
                  };
        

        case  LOADING_TOGGLE_ACTION:
               return { ...state,
                showLoading: action.payload,
            };
        
            default:
                return state;
              
}
}

    
