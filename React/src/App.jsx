import { useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SignIn from "./Firebase/SignIn";
import HomePage from "./Firebase/HomePage";
import { LoginProvider } from "./Firebase/loginContext";
// import { loginProvider } from "./Firebase/loginContext";
const router = createBrowserRouter([
  {
    path: "/",
    element: <SignIn />,
  },
  {
    path: "/Homepage",
    element: <HomePage />,
  },
]);
const App = () => {
  const [login, setLogin] = useState(null);
  return (
    <>
      <LoginProvider value={{ login, setLogin }}>
        <RouterProvider router={router} />
      </LoginProvider>
    </>
  );
};

export default App;
