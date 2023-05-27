import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  FC,
  useEffect,
} from 'react';
import type {Dispatch, SetStateAction} from 'react';
import {instance} from '../library';
import {useAuth} from './AuthProvider';
import {useAsyncEffect} from '../hooks';

interface DataContextInterface {
  data?: string;
  setData: Dispatch<SetStateAction<string>>;
  deleteData: ({id, type}: {id: string; type: string}) => void;
  createGroup: (props: any) => void;
  createClass: (props: any) => void;
  updateGroup: (props: any) => void;
  updateClass: (props: any) => void;
  groups: any;
  todayTask: any;
  loading: any;
}

const DataContext = createContext<DataContextInterface>(
  {} as DataContextInterface,
);

interface DataProviderProps {
  children: ReactNode;
}

export const DataProvider: FC<DataProviderProps> = ({children}) => {
  const [data, setData] = useState('');
  const [groups, setGroups] = useState();
  const [todayTask, setTask] = useState();
  const {user} = useAuth();
  const [loading, setLoading] = useState({
    group: false,
    task: false,
  });

  useAsyncEffect(async () => {
    try {
      setLoading(prevLoading => ({...prevLoading, group: true}));
      setLoading(prevLoading => ({...prevLoading, task: true}));
      const {data} = await instance.get(`/userGroup/${user?.id.S}`);
      setGroups(data.message);
      setLoading(prevLoading => ({...prevLoading, group: false}));

      const todayData = await instance.get('/taskToday');
      setTask(todayData.data.message);
      setLoading(prevLoading => ({...prevLoading, task: false}));
    } catch (error) {
      console.error(error);
    }
  }, [user]);

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
        deleteData,
        createGroup,
        createClass,
        updateGroup,
        updateClass,
        groups,
        todayTask,
        loading,
      }}>
      {children}
    </DataContext.Provider>
  );
};

export const UseData = (): DataContextInterface => useContext(DataContext);
