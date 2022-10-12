import React, { createContext } from 'react';
import Header from '../Header/Header';
import { Outlet, useLoaderData } from "react-router-dom";
import Footer from '../Footer/Footer';
export const TopicsContext = createContext([]);
const Main = () => {
    const topics = useLoaderData();
    // console.log(topics.data);
    return (
        <div>
            <TopicsContext.Provider value={topics.data}>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
            </TopicsContext.Provider>
        </div>
    );
};

export default Main;