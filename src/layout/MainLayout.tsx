import React, {memo} from 'react';

import {Outlet} from "react-router-dom";

import {Header} from "./Header/Header";
import {Sidebar} from "./Sidebar/Sidebar";
import {Footer} from "./Footer/Footer";

const MainLayout = memo((): JSX.Element => {

    return (
        <>
            <Header/>
            <Outlet/>
            <Sidebar/>
            <Footer/>
        </>
    );
});

export {MainLayout};