import React from 'react'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'

function MainRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Outlet />}>
                    <Route index element={<Home />} />
                    <Route path='login' element={<Login />} />
                    <Route path='register' element={<Register />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default MainRouter