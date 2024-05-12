import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "../pages/Authentication/Login";
import Register from "../pages/Authentication/Register";
import Main from "../layouts/Main";
import NeedVolunteer from "../pages/NeedVolunteer";
import AddVolunteer from "../pages/AddVolunteer";
import DetailsValunteer from "../components/DetailsValunteer";
import ManageMyPost from "../pages/ManageMyPost/ManageMyPost";
import Update from "../pages/ManageMyPost/Update";

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
                path: '/manage-post',
                element:<ManageMyPost></ManageMyPost>
            },
            {
                path: '/add-volunteer',
                element:<AddVolunteer></AddVolunteer>
            },
            {
                path: '/update/:id',
                element: <Update></Update>,
                loader: ({ params }) => fetch(`http://localhost:5000/all/${params.id}`)
            },
            {
                path: '/volunteer-details/:id',
                element: <DetailsValunteer></DetailsValunteer>,
                loader: ({params}) => fetch(`http://localhost:5000/all/${params.id}`)
            },
        ]
    },
]);
