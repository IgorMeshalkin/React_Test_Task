import React, {useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import {useSelector} from "react-redux";

const MainPage = () => {
    //состояние авторизации
    const authorization = useSelector(state => state.authorization.authorizationState)

    //переменная для перемещения между страницами
    const navigate = useNavigate();

    //в случае если пользователь не авторизован отправляет его на страницу авторизации
    useEffect(() => {
        if (!authorization.isAuthorization) {
            navigate('/login')
        }
    })

    return (
        <div className="darkBackground">
            MainPage
        </div>
    );
};

export default MainPage;