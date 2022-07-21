import { createContext, useState, useEffect } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({});

    console.log("Auth Provider", auth)

    if(auth?.jwtToken) {
        sessionStorage.setItem('user', auth?.user)
        sessionStorage.setItem('jwtToken', auth?.jwtToken)
    }

    return (
        <AuthContext.Provider value={{auth, setAuth}}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContext;