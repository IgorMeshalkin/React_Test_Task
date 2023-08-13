import React from 'react';
import styles from './ButtonsBlock.module.css'
import ToBasketButton from "../../../../ui/ToBasketButton/ToBasketButton";
import {TO_BASKET_BUTTON_TEXT} from "../../../../properties/storePageProperties";
import HeartButton from "../../../../ui/HeartButton/HeartButton";

const ButtonsBlock = () => {
    return (
        <div className={styles.main}>
            <ToBasketButton>{TO_BASKET_BUTTON_TEXT}</ToBasketButton>
            <div className={styles.heartButtonContainer}>
                <HeartButton/>
            </div>
        </div>
    );
};

export default ButtonsBlock;