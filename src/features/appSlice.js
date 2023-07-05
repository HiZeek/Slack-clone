import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
  name: "app",
  initialState: {
    roomId: "",
  },
  reducers: {
    enterRoom: (state, action) => {
      //   console.log(`Actions ${action.payload.roomId}`);/
      state.roomId = action.payload.roomId;
    },
  },
});

export const { enterRoom } = appSlice.actions;

export const selectRoomId = (state) => state.user.roomId;

export default appSlice.reducer;
