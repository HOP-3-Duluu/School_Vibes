import React, {createContext, useContext, useState, ReactNode, FC} from 'react';
import type {Dispatch, SetStateAction} from 'react';
import {instance} from '../library';

interface userProps {
  name: string;
  password: string;
}
interface AuthContextInterface {
  user?: userProps;
  setUser: Dispatch<SetStateAction<userProps>>;
  Login: (name: string, password: string, rePassword: string) => void;
  updateUser: (username: string) => void;
  deleteUser: (username: string, password: string) => void;
}

const AuthContext = createContext<AuthContextInterface>(
  {} as AuthContextInterface,
);
interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: FC<AuthProviderProps> = ({children}) => {
  const [user, setUser] = useState<userProps>();
  const [userId, setUserId] = useState<string>();
  const Login = (name: string, password: string) => {
    try {
      // const login = await in
      setUser({name, password});
    } catch (e) {
      return e;
    }
  };

  const updateUser = async (username: string) => {
    try {
      await instance.put(`/user`, {data: {username}});
      return username;
    } catch (e) {
      return e;
    }
  };

  const deleteUser = async (username: string, password: string) => {
    try {
      await instance.delete(`/user/${username}`, {data: {password}});
      return username;
    } catch (error) {
      throw new Error('Failed to delete user');
    }
  };
  return (
    <AuthContext.Provider
      value={{user, setUser, Login, updateUser, deleteUser}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextInterface => useContext(AuthContext);
