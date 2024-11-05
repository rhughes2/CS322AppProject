import { useState } from "react";
import Auth0 from "react-native-auth0";
import { AUTH_CONFIG } from "./authConfig";

const auth0 = new Auth0(AUTH_CONFIG);

const useAuth = () => {
    const [user, setUser] = useState(null);

    const login = async () => {
        try {
            const credentials = await auth0.webAuth.authorize({ scope: 'openid profile email'});
            const userInfo = await auth0.auth.userInfo({token: credentials.accessToken});
            setUser(userInfo);
        } catch (error){
            console.error(error);
        }
    };

    const logout = async () => {
        try {
            await auth0.webAuth.clearSession();
            setUser(null);
        } catch (error){
            console.error('Logout failed', error);
        }
    };

    return { user, login, logout };
};

export default useAuth;