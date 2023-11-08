import ReactDOM from "react-dom/client";
import store from "./redux/store";
import { Provider } from "react-redux";
import Calculator from "./features/calculator/Calculator.Layout";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <Calculator />
  </Provider>
);
