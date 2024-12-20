import App from "./App";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/formcomponets/Login";
import Signup from "./components/formcomponets/Signup";
import { Provider } from "react-redux";
import appstore from "./components/utils/appStore";
import Userhome from "./components/usercomponents/Userhome";
import Error from "./components/Error";
import Allmovies from "./components/usercomponents/Allmovies";


const approutes = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path:'/userhome',
        element:<Userhome></Userhome>,
        children:[
          {
            path:'/userhome/',
            element:<Allmovies></Allmovies>
          }
        ]
      },
      
      {
        path:'/error',
        element:<Error></Error>
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <Provider store={appstore}>
    <RouterProvider router={approutes}></RouterProvider>
  </Provider>
);
