import React, { useState, createContext } from 'react';

export const AuthContext = createContext({});

function AuthProvider({ children }){
    const [user, setUser] = useState({
        nome: 'Matheus',
        uid: '19023091290312903901'
    });

    return(
     <AuthContext.Provider value={{ user }}>
         {children}
     </AuthContext.Provider>   
    );
}

export default AuthProvider;