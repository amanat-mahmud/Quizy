import React from 'react';
import Error from './Error/Error.jsx'
import {
    createBrowserRouter,
    RouterProvider,

  } from "react-router-dom";
import Main from './layout/Main.jsx';
const Route = () => {
    const router = createBrowserRouter([
        {
            path:'/',
            element:<Main></Main>,
            children:[
                {
                    path:'home',
                    element:<div>Home</div>
                },
                {
                    path: 'topics',
                    element:<div>In topic</div>
                },
                {
                    path:'pricing',
                    element:<div>I am in pricing</div>
                }
            ],
            errorElement:<Error></Error>
        }
    ])
    return (
        <div>
            <RouterProvider router={router}>

            </RouterProvider>
        </div>
    );
};

export default Route;