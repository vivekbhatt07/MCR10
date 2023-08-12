import { useContext, createContext, useReducer } from "react";

import { inventoryData } from "../Data";

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const InitialState = {
    inventoryList: inventoryData,
  };

  const DataReducer = (state, action) => {
    switch (action.type) {
      case "INITIAL": {
        return { ...state };
      }
    }
  };

  const [state, dispatch] = useReducer(DataReducer, InitialState);

  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};

const useData = () => {
  return useContext(DataContext);
};

export { useData, DataProvider };
