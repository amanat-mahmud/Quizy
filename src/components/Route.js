import React from 'react';
import Error from './Error/Error.jsx'
import {
    createBrowserRouter,
    RouterProvider,

  } from "react-router-dom";
import Main from './layout/Main.jsx';
import Home from './Home/Home.jsx';
const Route = () => {
    const router = createBrowserRouter([
        {
            path:'/',
            element:<Main></Main>,
            loader:()=> {return fetch("https://openapi.programming-hero.com/api/quiz")},
            children:[
                {
                    path:'/',
                    element:<Home></Home>
                },
                {
                    path:'home',
                    element:<Home></Home>
                },
                {
                    path: 'topics',
                    element:<div>In topic</div>
                },
                {
                    path:'blog',
                    element:<div>I am in blog</div>
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