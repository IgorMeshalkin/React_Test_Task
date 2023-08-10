import React from 'react';
import styles from './Loader.module.css'
import {Spin} from 'antd';
import {useSelector} from "react-redux";

const Loader = () => {
    //состояние авторизации
    const authorization = useSelector(state => state.authorization.authorizationState)

    //возвращает стиль для лоадера исходя из контекста
    const getStyle = () => {
        if (authorization.isChanged) {
            if (authorization.isLoading) {
                return [styles.main, styles.active].join(' ')
            } else {
                return [styles.main, styles.notActive].join(' ')
            }
        } else {
            return styles.main
        }
    }

    return (
        <div className={getStyle()}>
            <Spin size="large"/>
        </div>
    );
};

export default Loader;