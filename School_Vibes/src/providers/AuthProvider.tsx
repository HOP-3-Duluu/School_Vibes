import React, {createContext, useContext, useState, ReactNode, FC} from 'react';
import type {Dispatch, SetStateAction} from 'react';

interface AuthContextInterface {
  user?: string;
  setUser: Dispatch<SetStateAction<string>>;
}

const AuthContext = createContext<AuthContextInterface>(
  {} as AuthContextInterface,
);
interface AuthProviderProps {
  children: ReactNode;
}
export const AuthProvider: FC<AuthProviderProps> = ({children}) => {
  const [user, setUser] = useState('');

  return (
    <AuthContext.Provider value={{user, setUser}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextInterface => useContext(AuthContext);
