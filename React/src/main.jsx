import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./3OctRouting/Home";
import Contact from "./3OctRouting/Contact";
import About from "./3OctRouting/About";
import ProductList from "./4Oct-RoutingV2-PathParams/productList";
import ProductDetails from "./4Oct-RoutingV2-PathParams/productDeatails";
import QueryExample from "./6Oct-queryParams/examplQuery";
import FetchProducts from "./Async/product";
import AfterTimeProductLoad from "./Tasks/AfterTimeProductLoad";
import ParentD from "./Day23-PropDrilling/parent";

// import "./index.css";

// import App from "./App";
// import ClassComp1 from "./classComp/ClassComp1";
// import CounterByClass from "./classComp/CounterByClass";
// import InputFormByFunction from "./Day7/inputFormByFunction";
// import FormByAnkit from "./Day8/formByAnkit";
// import FormV1 from "./Day8/formV2";
// import Roopesh from "./classComp/ClassComp1";
// import Counter from "./classComp/ClassComp1";
// import FormsV3 from "./Day8/AnkitBhai";
// import CounterQuestion from "./Day9/counterQuestion";
// import Counter2 from "./Day9/counter2";
// import ClickMe from "./Day9/clickMe";
// import Missile from "./Day9/missile";
// import Todo from "./Todo/Todo";
// import Missile2 from "./Day9/Missile2";
// import Missile3 from "./Day9/missile3";
// import ParentComp from "./Day10/task";
// import Parent11 from "./Day10/ChildToParent/Parent11";
// import P1 from "./Day10/ChildToFunc-Basic/P1";
// import Parent22 from "./Day10/Child-Parent/Parent22";
// import UseEffect from "./Day12/useEffect";
// import ProductList from "./Day13/producct2";
// import ArrayMap from "./Day13/Array";
// import Movies from "./Day13/movies";
// import ProductListWithFilters from "./Day14/FilterAnkitBhai";
// import Toggle from "./Day15/Toggle";
// import Toggle1 from "./Day15/practice/toggle";
// import HomePage from "./Tasks/PhotoEditor/HomePage";
// import CompUseMemo from "./Day16/CompUseMemo";
// import StopWatch from "./28Sep/atopWatch";
// import CodeFlowV1 from "./Day17/CodeFlow";
// import OccuranceByMemo from "./Day17/CodeFlow2";
// import ProductList from "./Day13/productApi";
// import HomePageFake from "./Tasks/FakeApi/HomePage";
// import HomePAge2 from "./Tasks/FakeApi/HomePage2";
// import HomePageFake from "./Tasks/FakeApi/HomePage";
// import CallBack from "./useCallBack/CallBack";
/////////////////////////
////routing
const router = createBrowserRouter([
  //   { path: "/", element: <Home /> },
  //   { path: "/contact", element: <Contact /> },
  //   { path: "/about", element: <About /> },
  //   { path: "/", element: <ProductList /> },
  //   { path: "/:productDetails/:productId", element: <ProductDetails /> },
  { path: "/", element: <ParentD /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
