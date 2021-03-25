import React, { useReducer, createContext } from 'react';

// State
const initialState = {
    // accessToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI4NmI5OWI4OC1jNWJkLTQ1NGMtYWM4ZS1kY2QwMWRmNjlkMzgiLCJpYXQiOjE2MTE5MzQyNjgsImV4cCI6MTYxMjUzOTA2OH0.fFBXwgImts6_tU738_OQ5HIGPlRcRSCT_g1sx_5eO94'

    accessToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTZkNjljYi00YzU5LTRiZTMtODM5Yy0yOTQxOGY0NDU4YzgiLCJhY2Nlc3NJZCI6ImJkYmEyMGIzLTVkMDYtNDIxOC04OTAyLTQ0MjM3NTYxZWRkYiIsImlhdCI6MTYxNjMxODM2MSwiZXhwIjoxNjE2OTIzMTYxfQ.QoFYYzpqdJQ03g4b7oDIJgM1ibPOR54IcbAGyEY6Ar0'
}

/**
 * TODO: 
 * This should work when user logs out or logs in himself.
 * However, on token expiry, there will simply be a 
 * graphQL unauthorized error. On that error, we need
 * log the user out automatically, so that he can login
 * again. 
 */


// Reducer 
const authReducer = (state, action) => {
    console.log('auth reducer called with acton:', action);
    switch (action.type) {
        case "LOG_IN":
            console.log('Logging in');
            return {
                ...state,
                accessToken: action.payload
            }
        case "LOG_OUT":
            console.log('Logging out! Removing access token');
            localStorage.removeItem('accessToken');
            return {
                ...state,
                accessToken: ''
            }
        default:
            return state;
    }
}

// Create Context
const AuthContext = createContext()

// Context Provider
const AuthProvider = ({ children }) => {
    const [authState, dispatch] = useReducer(authReducer, initialState);

    // const dispatch = (args) => {
    //     console.log('calling dispatch with args:', args);
    //     defaultDispatch(args);
    // }

    const value = { authState, dispatch }
    return <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
}

// Export
export {AuthContext, AuthProvider}