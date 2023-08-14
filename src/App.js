import {Route, Routes, useLocation} from "react-router-dom";
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import StorePage from "./pages/StorePage";
import Loader from "./ui/Loader/Loader";
import React from "react";
import Navbar from "./componets/Navbar/Navbar";
import {useSelector} from "react-redux";

function App() {
    //переменная содержащая адрес текущего роута.
    const location = useLocation();
    //состояние авторизации
    const authorization = useSelector(state => state.authorization.authorizationState)

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
                <Loader
                    isIncluded={authorization.isChanged}
                    isActive={authorization.isLoading}
                />
            </div>
        </>
    );
}

export default App;
