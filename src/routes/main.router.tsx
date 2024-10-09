import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "../pages/home"

export const RoutesProvaier = BrowserRouter

export const MainRoutes = ( ) => {
    return (
        <Routes>
            <Route index element={<Home/>} />  
        </Routes>
    )
}
