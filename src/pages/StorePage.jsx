import React from 'react';
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

const StorePage = () => {
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
        <div>
            StorePage
        </div>
    );
};

export default StorePage;