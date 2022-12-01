import React from 'react';

import {Routes, Route, Navigate} from "react-router-dom";
import {MainLayout} from "./layout/MainLayout";
import {Home, ProductPage} from "./pages";


function App() {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Navigate to={'home'}/>}/>
                <Route path={'home'} element={<Home/>}/>
                <Route path={'product/:id'} element={<ProductPage/>}/>
            </Route>
        </Routes>
    );
}

export default App;
