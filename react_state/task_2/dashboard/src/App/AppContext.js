import React from 'react';

// Define a default user object
export const user = {
    email: '',
    password: '',
    isLoggedIn: false
}

// Define a function to log out the user
export const logOut = () => {}

// Create a context object with the default user object and logOut function
export const AppContext = React.createContext({user, logOut})
