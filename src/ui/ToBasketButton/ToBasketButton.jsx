import React from 'react';
import {Button, ConfigProvider} from "antd";
import styles from './ToBasketButton.module.css'

const ToBasketButton = ({children}) => {
    //получает цвет для кнопки из css переменной файла App.css
    const buttonPrimaryColor = getComputedStyle(document.documentElement)
        .getPropertyValue('--dark-violet');

    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: buttonPrimaryColor,
                    controlHeight: '36px',
                    borderRadius: 8
                },
            }}
        >
            <Button type="primary">
                <span className={styles.text}>{children}</span>
            </Button>
        </ConfigProvider>
    );
};

export default ToBasketButton;