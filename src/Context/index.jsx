import { useContext, createContext, useReducer } from "react";

import { inventoryData } from "../Data";

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const InitialState = {
    inventoryList: inventoryData,
    isLow: false,
    category: "",
    sortBy: "name",
  };

  const DataReducer = (state, action) => {
    switch (action.type) {
      case "TOGGLE_LOW_FILTER": {
        return { ...state, isLow: action.payload };
      }
      case "FILTER_BY_CATEGORY": {
        return { ...state, category: action.payload };
      }
      case "FILTER_BY_SORT": {
        return { ...state, sortBy: action.payload };
      }
    }
  };

  const [state, dispatch] = useReducer(DataReducer, InitialState);

  let filteredList = state.inventoryList;

  if (state.sortBy === "name") {
    filteredList = [...filteredList].sort((a, b) => {
      return a.name - b.name;
    });
  } else if (state.sortBy === "price") {
    filteredList = [...filteredList].sort((a, b) => {
      if (a.price > b.price) return 1;
      if (a.price < b.price) return -1;
      return 0;
    });
  } else if (state.sortBy === "stock") {
    filteredList = [...filteredList].sort((a, b) => {
      if (a.stock > b.stock) return 1;
      if (a.stock < b.stock) return -1;
      return 0;
    });
  }

  if (state.isLow) {
    filteredList = filteredList.filter((currentInventory) => {
      return currentInventory.stock <= 10;
    });
  }

  if (state.category) {
    filteredList = filteredList.filter((currentInventory) => {
      return currentInventory.department === state.category;
    });
  }

  return (
    <DataContext.Provider value={{ state, dispatch, filteredList }}>
      {children}
    </DataContext.Provider>
  );
};

const useData = () => {
  return useContext(DataContext);
};

export { useData, DataProvider };
