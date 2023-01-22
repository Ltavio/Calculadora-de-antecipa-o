import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "../Pages/Dashboard";

const RouteMain = () => {
    return (
        <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="*" element={<Navigate replace to={"/dashboard"} />} />
        </Routes>
    )
} 

export default RouteMain;