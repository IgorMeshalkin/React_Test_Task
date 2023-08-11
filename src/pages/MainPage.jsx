import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import UsersTable from "../componets/UsersTable/UsersTable";

const MainPage = () => {
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
            <div className="halfScreenContainer">
                <UsersTable/>
            </div>
            <div className="halfScreenContainer">

            </div>
        </div>
    );
};

export default MainPage;