import React from 'react';
import styles from './Loader.module.css'
import {Spin} from 'antd';

const Loader = ({isIncluded, isActive}) => {
    //возвращает стиль для лоадера исходя из контекста
    const getStyle = () => {
        if (isIncluded) {
            if (isActive) {
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