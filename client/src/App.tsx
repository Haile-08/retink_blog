import {
  RouterProvider,
  createBrowserRouter,
  useRouteError,
} from "react-router-dom";
import Home from "./Components/Home/Home";
import MainLayout from "./Components/MainLayout/MainLayout";
import Login from "./Components/Login/Login";
import SignUp from "./Components/SignUp/Signup";
import "./App.css";
import Author from "./Components/Author/Author";

function App() {
  function ErrorPage() {
    const error: any = useRouteError();

    return (
      <div id="error-page">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    );
  }
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/signup",
          element: <SignUp />,
        },
        {
          path: "/author",
          element: <Author />,
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <header className="App-header">
        <RouterProvider router={router} />
      </header>
    </div>
  );
}

export default App;
