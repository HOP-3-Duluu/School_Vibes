import React, {createContext, useContext, useState, ReactNode, FC} from 'react';
import type {Dispatch, SetStateAction} from 'react';
import {instance} from '../library';

interface DataContextInterface {
  data?: string;
  setData: Dispatch<SetStateAction<string>>;
  getData: ({id, type}: {id: string; type: string}) => void;
  deleteData: ({id, type}: {id: string; type: string}) => void;
  createGroup: (props: any) => void;
  createClass: (props: any) => void;
  updateGroup: (props: any) => void;
  updateClass: (props: any) => void;
}

const DataContext = createContext<DataContextInterface>(
  {} as DataContextInterface,
);

interface DataProviderProps {
  children: ReactNode;
}

export const DataProvider: FC<DataProviderProps> = ({children}) => {
  const [data, setData] = useState('');

  const getData = async ({id, type}: {id: string; type: string}) => {
    try {
      const data = await instance.get(`/${type}/${id}`);
      return data;
    } catch (e) {
      return e;
    }
  };
  const deleteData = async ({id, type}: {id: string; type: string}) => {
    try {
      const data = await instance.delete(`/${type}/${id}`);
      return data;
    } catch (e) {
      return e;
    }
  };

  const createGroup = async (props: any) => {
    try {
      await instance.post('/group', {data: props});
      return props;
    } catch (e) {
      return e;
    }
  };
  const createClass = async (props: any) => {
    try {
      await instance.post('/class', {data: props});
      return props;
    } catch (e) {
      return e;
    }
  };

  const updateGroup = async (props: any) => {
    try {
      await instance.put('/group', {data: props});
      return props;
    } catch (e) {
      return e;
    }
  };
  const updateClass = async (props: any) => {
    try {
      await instance.put('/class', {data: props});
      return props;
    } catch (e) {
      return e;
    }
  };

  return (
    <DataContext.Provider
      value={{
        data,
        setData,
        getData,
        deleteData,
        createGroup,
        createClass,
        updateGroup,
        updateClass,
      }}>
      {children}
    </DataContext.Provider>
  );
};

export const UseData = (): DataContextInterface => useContext(DataContext);
