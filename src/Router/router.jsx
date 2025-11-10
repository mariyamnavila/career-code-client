import {
    createBrowserRouter,
} from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import SignIn from "../Pages/SignIn/SignIn";
import JobDetails from "../Pages/JobDetails/JobDetails";
import PrivateRoute from "../Routes/PrivateRoute";
import JobApply from "../Pages/JobApply/JobApply";
import MyApplications from "../Pages/MyApplications/MyApplications";
import AddJob from "../Pages/AddJob/AddJob";
import MyPostedJobs from "../Pages/MyPostedJobs/MyPostedJobs";
import ViewApplications from "../Pages/View Applications/ViewApplications";

const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayout,
        children: [
            {
                index: true,
                Component: Home,
            },
            {
                path: '/jobs/:id',
                Component: JobDetails,
                loader: ({ params }) => fetch(`http://localhost:3000/jobs/${params.id}`)
            },
            {
                path: '/jobApply/:id',
                element: <PrivateRoute><JobApply></JobApply></PrivateRoute>
            },
            {
                path: '/myApplications',
                element: <PrivateRoute><MyApplications /></PrivateRoute>
            },
            {
                path: '/addJob',
                element: <PrivateRoute><AddJob /></PrivateRoute>
            },
            {
                path: '/myPostedJob',
                element: <PrivateRoute><MyPostedJobs /></PrivateRoute>
            },
            {
                path: '/applications/:job_id',
                element: <PrivateRoute><ViewApplications /></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:3000/applications/job/${params.job_id}`)
            },
            {
                path: '/register',
                Component: Register,
            },
            {
                path: '/signIn',
                Component: SignIn,
            },
        ]
    },
]);

export default router