import React, {createContext, useContext, useState, ReactNode, FC} from 'react';
import type {Dispatch, SetStateAction} from 'react';

interface DataContextInterface {
  data?: string;
  setData: Dispatch<SetStateAction<string>>;
}

const DataContext = createContext<DataContextInterface>(
  {} as DataContextInterface,
);
interface DataProviderProps {
  children: ReactNode;
}
export const DataProvider: FC<DataProviderProps> = ({children}) => {
  const [data, setData] = useState('');

  return (
    <DataContext.Provider value={{data, setData}}>
      {children}
    </DataContext.Provider>
  );
};

export const UseData = (): DataContextInterface => useContext(DataContext);
