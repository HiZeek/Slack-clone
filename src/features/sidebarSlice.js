import { createSlice } from "@reduxjs/toolkit";

export const sidebarSlice = createSlice({
  name: "sidebar",
  initialState: {
    sidebarIsOpen: true,
  },
  reducers: {
    toggleSidebar: (state) => {
      state.sidebarIsOpen = !state.sidebarIsOpen;
    },
  },
});

export const { toggleSidebar } = sidebarSlice.actions;

export const selectSidebarState = (state) => state.sidebar.sidebarIsOpen;

export default sidebarSlice.reducer;
