import React from 'react';
import Error from './Error/Error.jsx'
import {
    createBrowserRouter,
    RouterProvider,

  } from "react-router-dom";
import Main from './layout/Main.jsx';
import Home from './Home/Home.jsx';
import Blog from './Blog/Blog.jsx';
import Statistics from './Statistics/Statistics.jsx';
import Quiz from './Quiz/Quiz.jsx';
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
                    path:'topic',
                    element:<Home></Home>
                },
                {
                    path:'topic/:id',
                    element:<Quiz></Quiz>,
                    loader:({param})=>fetch(`https://openapi.programming-hero.com/api/quiz/${param.id}`),
                    
                },
                {
                    path: 'statistics',
                    element:<Statistics></Statistics>
                },
                {
                    path:'blog',
                    element:<Blog></Blog>
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