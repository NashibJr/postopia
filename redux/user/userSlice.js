const { createSlice } = require("@reduxjs/toolkit");

const initialState = {};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    handleSigin: (state, action) => {
      state.user = action.payload;
    },
    handleSigout: (state, action) => {
      state.user = {};
    },
  },
});

export const { handleSigin, handleSigout } = userSlice.actions;

export default userSlice;
