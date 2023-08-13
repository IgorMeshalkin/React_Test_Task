import React, {useEffect, useState} from 'react';
import styles from './HeartButton.module.css'
import {EMPTY_HEART, FULL_HEART} from "../../properties/spetialChars";
import {ADD_TO_FAVORITE_TITLE, REMOVE_FROM_FAVORITE_TITLE} from "../../properties/storePageProperties";

const HeartButton = () => {
    //товар добавлен в избранное или нет
    const [isLiked, setIsLiked] = useState(false)
    //содержит стили для кнопки
    const [heartStyles, setHeartStyles] = useState(styles.heart)
    //это первый рендер страницы или нет. Нужно, что бы анимация не отрабатывала при первом рендере.
    const [isFirstRender, setIsFirstRender] = useState(true)

    //возвращает полное или пустое сердце в виде unicode символа в зависимости от контекста.
    const getCorrectHeart = () => {
        return isLiked ? FULL_HEART : EMPTY_HEART;
    }

    //при каждом изменении состояния isLiked, если это не первый рендер, меняет стили сердца, вызывая анимацию.
    useEffect(() => {
        if (!isFirstRender) {
            if (isLiked) {
                setHeartStyles([styles.heart, styles.liked].join(' '))
            } else {
                setHeartStyles([styles.heart, styles.disLiked].join(' '))
            }
        } else {
            setIsFirstRender(false)
        }
    }, [isLiked])

    return (
        <span
            className={heartStyles}
            onClick={() => setIsLiked(prevState => !prevState)}
            title={isLiked ? REMOVE_FROM_FAVORITE_TITLE : ADD_TO_FAVORITE_TITLE}
        >
            {getCorrectHeart()}
        </span>
    );
};

export default HeartButton;