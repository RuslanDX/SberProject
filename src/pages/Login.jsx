import React, {useContext} from 'react';
import MyInput from "../components/UI/input/MyInput";
import MyButton from "../components/UI/button/MyButton";
import {AuthContext} from "../context";

const Login = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);

    const login = event => {
        event.preventDefault();
        setIsAuth(true);
        /*Сохраняем в localStorage строку для проверки при заходе в приложение*/
        localStorage.setItem('auth', 'true')
    }

    return (
        <div>
            <h1 className="logo-1" style={{textAlign: 'center'}}>Страница для логина</h1>
            <form onSubmit={login}>
                <MyInput type="text" placeholder="Введите логин"/>
                <MyInput type="text" placeholder="Введите email"/>
                <MyInput type="password" placeholder="Введите пароль"/>
                <MyInput type="password" placeholder="Подтвердите пароль"/>
                <MyButton style={{marginLeft: 'auto',marginRight: '0'}} disabled={false}>Войти</MyButton>
            </form>
        </div>
    );
};

export default Login;
