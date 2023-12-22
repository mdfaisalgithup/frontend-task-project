
import {
    createBrowserRouter,
  } from "react-router-dom";
import MainRoot from "../MainRoot/MainRoot";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import TaskDashboard from "../TaskDashboard/TaskDashboard";
import AddTask from "../TaskDashboard/AddTask/AddTask";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import TasklAll from "../TasklAll/TasklAll";
import ErrorPage from "../ErrorPage/ErrorPage";



const router = createBrowserRouter([
    {
      path: "/",
      element: <MainRoot></MainRoot>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {   path: "/",
            element: <Home></Home>
        },
        {
            path: "/login",
            element: <Login></Login>
        },
        {
            path: "/register",
            element: <Register></Register>
        },
        {
          path: "/taskall",
          element: <TasklAll></TasklAll>

        }
      ]
    },

    {
      path: "/userdashboard",
      element: <PrivateRoute><TaskDashboard></TaskDashboard></PrivateRoute>,
      children: [
        {
          path: "/userdashboard",
          element: <PrivateRoute><AddTask></AddTask></PrivateRoute>
        }
      ]

    }






  ]);
  
  export default router