import {Route, Routes, useLocation} from "react-router-dom";
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import StorePage from "./pages/StorePage";
import Loader from "./componets/Loader/Loader";
import React from "react";
import Navbar from "./componets/Navbar/Navbar";

function App() {
    //переменная содержащая адрес текущего роута.
    const location = useLocation();

    return (
        <>
            {
                location.pathname !== '/login' &&
                <Navbar/>
            }
            <Routes>
                <Route index element={<MainPage/>}/>
                <Route path="/store" element={<StorePage/>}/>
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/*" element={<MainPage/>}/>
            </Routes>
            <div className="allScreenLoaderContainer">
                <Loader/>
            </div>
        </>
    );
}

export default App;
