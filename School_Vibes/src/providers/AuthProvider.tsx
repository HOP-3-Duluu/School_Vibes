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
  signUp: (props: any) => void;
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

  const Login = (name: string, password: string, rePassword: string) => {
    try {
      // const login = await in
      setUser({name, password});
    } catch (e) {
      return e;
    }
  };

  const signUp = async (props: any) => {
    try {
      await instance.post(`/user`, props);
      return props;
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
      value={{user, setUser, Login, signUp, updateUser, deleteUser}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextInterface => useContext(AuthContext);
