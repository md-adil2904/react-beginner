import { createContext ,useState} from "react";

export const MyStore = createContext();

export const ContextProvider = ({children}) => {

  const [data, setData] =  useState('I am data');
  return <MyStore.Provider value={data} >
    {children}
  </MyStore.Provider>
}