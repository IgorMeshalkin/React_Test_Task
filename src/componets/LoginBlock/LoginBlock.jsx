import React, {useRef} from 'react';
import styles from './LoginBlock.module.css'
import {Button, Form, Input} from "antd";
import {useDispatch} from "react-redux";
import {startLoadingAuthorization, successfulAuthorization} from "../../store/slices/authorizationSlice";
import {useNavigate} from "react-router-dom";
import {
    AUTHORIZATION_TITLE,
    CAPITAL_LETTER_MESSAGE,
    EMAIL_TITLE,
    EMPTY_EMAIL_MESSAGE,
    EMPTY_PASSWORD_MESSAGE,
    NOT_CORRECT_EMAIL_MESSAGE,
    PASSWORD_MIN_LENGTH,
    PASSWORD_TITLE,
    SHORT_PASSWORD_MESSAGE,
    SUBMIT_BUTTON_TEXT
} from "../../properties/loginPageProperties";

const LoginBlock = () => {
    //переменная для переключения между страницами
    const navigate = useNavigate();
    //диспатч для вызова редюсеров авторизации
    const dispatch = useDispatch();
    //редюсеры авторизации
    const startLoadingAuth = (route) => dispatch(startLoadingAuthorization(route));
    const successfulAuth = (route) => dispatch(successfulAuthorization(route));

    //функция отправки формы
    const submit = () => {
        startLoadingAuth()
        setTimeout(() => {
            successfulAuth()
            navigate('/')
        }, 2000)
    };

    //реф инпута пароля
    const passwordInputRef = useRef()

    //обрезает пробелы в пароле
    const changePassword = (event) => {
        if (event.target.value.includes(' ')) {
            const valueWithoutSpaces = event.target.value.replaceAll(' ', '')
            setTimeout(() => {
                passwordInputRef.current.input.value = valueWithoutSpaces
            }, 100)
        }
    }

    return (
        <div className={styles.main}>
            <span className={styles.title}>{AUTHORIZATION_TITLE}</span>
            <Form
                name="basic"
                style={{
                    width: 400,
                }}
                onFinish={submit}
                layout="vertical"
            >
                <Form.Item
                    label={<label style={{color: "white"}}>{EMAIL_TITLE}</label>}
                    name="email"
                    rules={[
                        {required: true, message: EMPTY_EMAIL_MESSAGE},
                        {pattern: '[a-z0-9]+@[a-z]+\\.[a-z]{2,3}', message: NOT_CORRECT_EMAIL_MESSAGE},
                    ]}
                >
                    <Input/>
                </Form.Item>

                <Form.Item
                    label={<label style={{color: "white"}}>{PASSWORD_TITLE}</label>}
                    name="password"
                    rules={[
                        {required: true, message: EMPTY_PASSWORD_MESSAGE},
                        {pattern: '[\\w|\\W]{' + PASSWORD_MIN_LENGTH + '}', message: SHORT_PASSWORD_MESSAGE},
                        {pattern: '[A-ZА-Я]', message: CAPITAL_LETTER_MESSAGE}
                    ]}
                >
                    <Input.Password
                        ref={passwordInputRef}
                        onChange={(event) => changePassword(event)}
                    />
                </Form.Item>

                <Form.Item wrapperCol={{offset: 8, span: 16}}>
                    <Button type="primary" htmlType="submit">
                        {SUBMIT_BUTTON_TEXT}
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
        ;
};

export default LoginBlock;