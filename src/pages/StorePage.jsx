import React, {useEffect} from 'react';
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import StoreBlock from "../componets/StoreBlock/StoreBlock";

const StorePage = () => {
    //состояние авторизации
    const authorization = useSelector(state => state.authorization.authorizationState)

    //переменная для переключения между страницами
    const navigate = useNavigate();

    //в случае если пользователь не авторизован отправляет его на страницу авторизации
    useEffect(() => {
        if (!authorization.isAuthorization) {
            navigate('/login')
        }
    })

    return (
        <div className="background">
            <StoreBlock/>
        </div>
    );
};

export default StorePage;