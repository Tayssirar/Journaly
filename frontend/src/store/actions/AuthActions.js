import {
    formatError,
    login,
    runLogoutTimer,
    saveTokenInLocalStorage,
    signUp,
} from '../../services/AuthService';

export const SELECT_ROLE_ACTION = '[role selection] select role';
export const SIGNUP_CONFIRMED_ACTION = '[signup action] confirmed signup';  
export const SIGNUP_FAILED_ACTION = '[signup action] failed signup';
export const LOGIN_CONFIRMED_ACTION = '[login action] confirmed login';
export const LOGIN_FAILED_ACTION = '[login action] failed login';
export const LOADING_TOGGLE_ACTION = '[Loading action] toggle loading';
export const LOGOUT_ACTION = '[Logout action] logout action';
export const NAVTOGGLE = 'NAVTOGGLE';

export function selectRoleAction(role) {

    return {
        type: SELECT_ROLE_ACTION,
        payload: role,
    };

}
export function signupAction(email, password, navigate) {
	
    return (dispatch) => {
        signUp(email, password)
        .then((response) => {
            saveTokenInLocalStorage(response.data);
            runLogoutTimer(
                dispatch,
                response.data.expiresIn * 1000,
                //history,
            );
            dispatch(confirmedSignupAction(response.data));
            navigate('/dashboard');
			//history.push('/dashboard');
        })
        .catch((error) => {
            const errorMessage = formatError(error.response.data);
            dispatch(signupFailedAction(errorMessage));
        });
    };
}

export function Logout(navigate) {
	localStorage.removeItem('userDetails');
    navigate('/login');
    
	return {
        type: LOGOUT_ACTION,
    };
}

export function loginAction(email, password, navigate, userRole) {
    return (dispatch) => {
        login(email, password)
            .then((response) => { 
                saveTokenInLocalStorage(response.data);
                runLogoutTimer(dispatch, response.data.expiresIn * 1000, navigate);
                
                // Use selectedRole or userRole from Redux store
                const roleToRedirect = userRole || 'default'; // Assuming 'default' if no role is set
                console.log("🚀 ~ .then ~ roleToRedirect:", roleToRedirect)
                // Dispatch loginConfirmedAction and navigate based on roleToRedirect
                dispatch(loginConfirmedAction(response.data, roleToRedirect));
                switch (roleToRedirect) {
                    case 'admin':
                        navigate('/AdminDashboard');
                        break;
                    case 'headmaster':
                        navigate('/HeadmasterDashboard');
                        break;
                    case 'inspector':
                        navigate('/InspectorDashboard');
                        break;
                    case 'assistant':
                        navigate('/AssistantDashboard');
                        break;
                    case 'teacher':
                        navigate('/TeacherDashboard');
                        break;
                    default:
                        navigate('/chooseUer'); 
                        break;

                }
            
            })
            .catch((error) => {
                const errorMessage = formatError(error.response.data);
                dispatch(loginFailedAction(errorMessage));
            });
    };
}

export function loginFailedAction(data) {
    return {
        type: LOGIN_FAILED_ACTION,
        payload: data,
    };
}

export function loginConfirmedAction(tokenDetails, userRole) {
    console.log("🚀 ~ loginConfirmedAction ~ userRole:", userRole)
    return {
        type: LOGIN_CONFIRMED_ACTION,
        payload: { tokenDetails, userRole }
    };
}


export function confirmedSignupAction(payload) {
    return {
        type: SIGNUP_CONFIRMED_ACTION,
        payload,
    };
}

export function signupFailedAction(message) {
    return {
        type: SIGNUP_FAILED_ACTION,
        payload: message,
    };
}

export function loadingToggleAction(status) {
    return {
        type: LOADING_TOGGLE_ACTION,
        payload: status,
    };
}
export const navtoggle = () => {    
    return {        
      type: 'NAVTOGGLE',
    };
};