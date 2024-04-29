export const isAuthenticated = (state) => {
    if (state.auth.auth.idToken) return true;
    return false;
};


export const getUserRole = (state) => {
    return state.auth.userRole 
}
