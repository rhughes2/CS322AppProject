//Initialize auth0
import React, {useState, useEffect} from "react";
import{AUTH0_DOMAIN, AUTH0_CLIENT_ID} from "@env";
import SInfo from "react-native-sensitive-info";
import Auth0 from "react-native-auth0";
import jwtDecode from "jwt-decode";
import { Alert } from "react-native";

const auth0 = new Auth0({
    domain: AUTH0_DOMAIN,
    clientId: AUTH0_CLIENT_ID,
});

const AuthContext = React.createContext();

//State variables
const AuthContextProvider = (props) => {
    const [loading, setLoading] = useState(true);
    const [loggedIn, setLoggedIn] = useState(null);
    const [userData, setUserData] = useState(null);
}
//Getting user's data (not in a evil way)
const getUserData = async id => {
    const idToken = id ? id : await SInfo.getItem('idToken',{});
    const {name, picture, exp} = jwtDecode(idToken);

    if (exp < Date.now() / 1000){
        throw new Error('ID token expired!');
    }

    return {
        name,
        picture,
    };    
};
//Defines what happens when the app renders the AuthContext
useEffect(() => {
    (async () => {
        try {
            const user_data = await getUserData();
            if(user_data) {
                setLoggedIn(true);
                setUserData(user_data);
            }
        } catch (err){
            setLoggedIn(false);
        }
    })();
}, []);
//Defines what happens just after the user logs in
useEffect(() => {
    (async () => {
        try{
            if (loggedIn){
                const user_data = await getUserData();
                if (user_data) {
                    setLoggedIn(true);
                    setUserData(user_data);
                }
            }
        }catch (err){
            Alert('Error logging in');
        }
    })();
},[loggedIn]);
//Define login()
const login = async () =>{
    try {
        const credentials = await auth0.webAuth.authorize({
            scope: 'openid email profile',
        });
        await SInfo.setItem('idToken', credentials.idToken, {});
        setLoggedIn(true);
        setUserData(user_data);
    } catch (err){
        Alert('Error logging in');
    }
};
//Define Logout
const logout = async () => {
    try {   
        await auth0.webAuth.clearSession({});
        await SInfo.deleteItem('idToken', {});
        setLoggedIn(false);
        setUserData(null);
    }catch (err) {
        Alert('Error loggin in');
    }
};
/*Finishing the module, we're going to make it available via a value object
and return the component that this module creates*/
const value = {
    loading,
    loggedIn,
    login,
    logout,
    userData,
};

return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
);

export { AuthContext, AuthContextProvider};