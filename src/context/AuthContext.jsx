import React, { createContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [ isAuth, setAuth] = React.useState(true);

  function handleAuth(val){
    setAuth(val)
  }

  return <AuthContext.Provider value={{isAuth, handleAuth}} >{children}</AuthContext.Provider>;
};
