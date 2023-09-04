import { configureStore } from "@reduxjs/toolkit";
import appReducer from "../features/appSlice";
import sidebarReducer from "../features/sidebarSlice";

export const store = configureStore({
  reducer: {
    app: appReducer,
    sidebar: sidebarReducer,
  },
});
