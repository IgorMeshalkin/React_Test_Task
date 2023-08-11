import React, {useRef} from 'react';
import styles from './LoginBlock.module.css'
import {Button, Form, Input} from "antd";
import {useDispatch} from "react-redux";
import {startLoadingAuthorization, successfulAuthorization} from "../../store/slices/authorizationSlice";
import {useNavigate} from "react-router-dom";

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
            <span className={styles.title}>Авторизация</span>
            <Form
                name="basic"
                style={{
                    width: 400,
                }}
                onFinish={submit}
                layout="vertical"
            >
                <Form.Item
                    label={<label style={{color: "white"}}>Электронная почта</label>}
                    name="email"
                    rules={[
                        {required: true, message: 'Введите электронную почту'},
                        {pattern: '[a-z0-9]+@[a-z]+\\.[a-z]{2,3}', message: 'Не корректный адрес электронно почты'},
                    ]}
                >
                    <Input/>
                </Form.Item>

                <Form.Item
                    label={<label style={{color: "white"}}>Пароль</label>}
                    name="password"
                    rules={[
                        {required: true, message: 'Введите ваш пароль'},
                        {pattern: '[\\w|\\W]{8}', message: 'В пароле должно быть не меньше 8-ми символов'},
                        {pattern: '[A-ZА-Я]', message: 'В пароле должна быть хотя бы одна заглавная буква'}
                    ]}
                >
                    <Input.Password
                        ref={passwordInputRef}
                        onChange={(event) => changePassword(event)}
                    />
                </Form.Item>

                <Form.Item wrapperCol={{offset: 8, span: 16}}>
                    <Button type="primary" htmlType="submit">
                        Авторизация
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
        ;
};

export default LoginBlock;