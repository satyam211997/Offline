import { createSlice } from "@reduxjs/toolkit";
const calculatorSlice = createSlice({
  name: "calculator",
  initialState: { value: 0 },
  reducers: {
    add: (state, actions) => {
      state.value =
        Number(actions.payload.firstNo) + Number(actions.payload.secondNo);
    },

    subtract: (state, actions) => {
      state.value =
        Number(actions.payload.firstNo) - Number(actions.payload.secondNo);
    },
    multiply: (state, actions) => {
      state.value =
        Number(actions.payload.firstNo) * Number(actions.payload.secondNo);
    },
    divide: (state, actions) => {
      state.value =
        Number(actions.payload.firstNo) / Number(actions.payload.secondNo);
    },
  },
});
export const { add, subtract, multiply, divide } = calculatorSlice.actions;
export default calculatorSlice.reducer;
