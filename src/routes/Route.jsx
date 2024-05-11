import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "../pages/Authentication/Login";
import Register from "../pages/Authentication/Register";
import Main from "../layouts/Main";
import NeedVolunteer from "../pages/NeedVolunteer";
import AddVolunteer from "../pages/AddVolunteer";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element:<Home></Home>
            },
            {
                path: '/login',
                element:<Login></Login>
            },
            {
                path: '/register',
                element:<Register></Register>
            },
            {
                path: '/need-volunteer',
                element:<NeedVolunteer></NeedVolunteer>
            },
            {
                path: '/add-volunteer',
                element:<AddVolunteer></AddVolunteer>
            }
        ]
    },
]);
