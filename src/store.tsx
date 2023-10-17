import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { createSlice } from "@reduxjs/toolkit";

import { IAppState } from "./Interfaces";
import { columns } from "./model/columns";
import { nodes } from "./model/data";

const initialState: IAppState = {
  columns: columns,
  hiddenColumns: [],
  rowsData: nodes,
  searchValue: "",
};

const slice = createSlice({
  name: "tableData",
  initialState,
  reducers: {
    updateHiddenColumns(state, action) {
      state.hiddenColumns = action.payload;
    },
    updateColumns(state, action) {
      state.columns = action.payload;
    },
    updateRowsData(state, action) {
      const updatedState = state.rowsData.map((row) => {
        if (row.id === action.payload.id) {
          return action.payload;
        } else return row;
      });

      state.rowsData = updatedState;
    },
    updateSearchValue(state, action) {
      state.searchValue = action.payload;
    },
  },
});

export const {
  updateHiddenColumns,
  updateColumns,
  updateRowsData,
  updateSearchValue,
} = slice.actions;

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["columns", "rowsData", "hiddenColumns"], // List the reducers you want to persist -use localstorage
};

const persistedReducer = persistReducer(persistConfig, slice.reducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Disable serializable check for redux-persist
    }),
});

export const persistor = persistStore(store);

export default store;
