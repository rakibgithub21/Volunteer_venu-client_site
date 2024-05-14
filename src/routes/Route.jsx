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
import BeAVolunteer from "../components/BeAVolunteer";
import ErrorPage from "../pages/ErrorPage";
import PrivateRoute from "./PrivateRoute";
import AllComents from "../components/AllComents";
// import { useContext } from "react";
// import { AuthContext } from "../providers/AuthProvider";

// const{user} = useContext(AuthContext)

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/need-volunteer',
                element: <NeedVolunteer></NeedVolunteer>
            },
            {
                path: '/manage-post',
                element: <PrivateRoute><ManageMyPost></ManageMyPost></PrivateRoute>
            },
            {
                path: '/add-volunteer',
                element: <PrivateRoute><AddVolunteer></AddVolunteer></PrivateRoute>
            },
            {
                path: '/update/:id',
                element: <PrivateRoute><Update></Update></PrivateRoute>,
                loader: ({ params }) => fetch(`https://b9-a11-serversite.vercel.app/all/${params.id}`)
            },
            {
                path: '/volunteer-details/:id',
                element: <PrivateRoute><DetailsValunteer></DetailsValunteer></PrivateRoute>,
                // loader: ({ params }) => fetch(`https://b9-a11-serversite.vercel.app/all/${params.id}`)
                //loader: ({ params }) => fetch(`https://b9-a11-serversite.vercel.app/all/${params.id}?email=${user?.email}`)
            },
            {
                path: '/be-volunteer/:id',
                element: <PrivateRoute><BeAVolunteer></BeAVolunteer></PrivateRoute>,
                loader: ({ params }) => fetch(`https://b9-a11-serversite.vercel.app/all/${params.id}`)

            },
            {
                path: '/all-comments',
                element: <PrivateRoute><AllComents></AllComents></PrivateRoute>,


            }
        ]
    },
]);
