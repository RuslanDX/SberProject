// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React, {useContext} from 'react';
// @ts-expect-error TS(6142): Module '../components/UI/input/MyInput' was resolv... Remove this comment to see the full error message
import MyInput from "../components/UI/input/MyInput";
// @ts-expect-error TS(6142): Module '../components/UI/button/MyButton' was reso... Remove this comment to see the full error message
import MyButton from "../components/UI/button/MyButton";
import {AuthContext} from "../context";

const Login = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);

    const login = (event: any) => {
        event.preventDefault();
        setIsAuth(true);
        /*Сохраняем в localStorage строку для проверки при заходе в приложение*/
        localStorage.setItem('auth', 'true')
    }

    return (
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        <div>
            {/* @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
            <h1 className="logo-1" style={{textAlign: 'center'}}>Страница для логина</h1>
            {/* @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
            <form onSubmit={login}>
                {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <MyInput type="text" placeholder="Введите логин"/>
                {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <MyInput type="text" placeholder="Введите email"/>
                {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <MyInput type="password" placeholder="Введите пароль"/>
                {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <MyInput type="password" placeholder="Подтвердите пароль"/>
                {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <MyButton style={{marginLeft: 'auto',marginRight: '0'}} disabled={false}>Войти</MyButton>
            {/* @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
            </form>
        {/* @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
        </div>
    );
};

export default Login;
