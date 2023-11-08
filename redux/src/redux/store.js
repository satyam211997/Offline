import { configureStore } from "@reduxjs/toolkit";
import CalculatorSlice from "../features/calculator/Calculator.Slice";
const store = configureStore({
  reducer: {
    calculator: CalculatorSlice,
  },
});
export default store;
