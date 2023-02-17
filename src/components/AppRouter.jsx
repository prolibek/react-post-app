import React from "react";
import Posts from '../pages/Posts';
import About from '../pages/About';
import PostIdPage from '../pages/PostIdPage'
import { Routes, Route, Navigate } from 'react-router-dom';
import { privateRoutes, publicRoutes } from '../router/router'
import { useContext } from "react";
import { AuthContext } from "../context/context";
import Loader from './UI/loaders/Loader';

const AppRouter = () => {
    const {loggedIn, loading} = useContext(AuthContext);

    if (loading) {
        return <Loader/>
    }

    return (
        <Routes>
            {
                loggedIn
                ?
                privateRoutes.map(route => 
                    <Route 
                        path={route.path} 
                        element={route.element} 
                        exact={route.exact}
                        key={route.path}
                    />
                )
                :
                publicRoutes.map(route => 
                    <Route 
                        path={route.path} 
                        element={route.element} 
                        exact={route.exact}
                        key={route.path}
                    />
                )
            }
            {
                loggedIn 
                ? 
                <Route 
                    path="*" 
                    element={<Navigate to="/posts" replace/>}
                />
                :
                <Route 
                    path="*" 
                    element={<Navigate to="/login" replace/>}
                />
            }            
        </Routes>
    )
}

export default AppRouter;