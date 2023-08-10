import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import StorePage from "./pages/StorePage";
import Loader from "./componets/Loader/Loader";
import React from "react";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MainPage/>}/>
                    <Route path="/login" element={<LoginPage/>}/>
                    <Route path="/store" element={<StorePage/>}/>
                    <Route path="/*" element={<MainPage/>}/>
                </Routes>
            </BrowserRouter>
            <Loader/>
        </>
    );
}

export default App;
