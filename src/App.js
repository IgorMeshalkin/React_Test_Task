import {Route, Routes, useLocation} from "react-router-dom";
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import StorePage from "./pages/StorePage";
import Loader from "./ui/Loader/Loader";
import React, {useEffect} from "react";
import Navbar from "./componets/Navbar/Navbar";
import {useDispatch, useSelector} from "react-redux";
import {prepareEventForTable} from "./utils/eventsUtil";
import {addToEventsList} from "./store/slices/eventsSlice";
import {WEB_SOCKET_ADDRESS, WEB_SOCKET_DISCONNECT_MESSAGE} from "./properties/connectingProperties";

function App() {
    //переменная содержащая адрес текущего роута.
    const location = useLocation();
    //состояние авторизации
    const authorization = useSelector(state => state.authorization.authorizationState)
    //диспатч для вызова редюсера добавления события в список
    const dispatch = useDispatch();
    //редюсер добавления события в список
    const addEventToList = (route) => dispatch(addToEventsList(route));

    //если пользователь авторизован подключается к web socket и слушает, при появлении событий добавляет их в events
    useEffect(() => {
        if (authorization.isAuthorization) {
            const ws = new WebSocket(WEB_SOCKET_ADDRESS);
            ws.onmessage = event => {
                addEventToList(prepareEventForTable(JSON.parse(event.data)))
            };
            ws.onclose = () => {
                alert(WEB_SOCKET_DISCONNECT_MESSAGE);
            };
            return () => {
                if (ws.readyState === 1) {
                    ws.close();
                }
            };
        }
    }, [authorization])

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
