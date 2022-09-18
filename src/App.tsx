// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React, {useEffect, useState} from 'react';
import './styles/App.css';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import {BrowserRouter} from "react-router-dom";
// @ts-expect-error TS(6142): Module './components/UI/Navbar/Navbar' was resolve... Remove this comment to see the full error message
import Navbar from "./components/UI/Navbar/Navbar";
// @ts-expect-error TS(6142): Module './components/AppRouter' was resolved to 'C... Remove this comment to see the full error message
import AppRouter from "./components/AppRouter";
import {AuthContext} from "./context";

function App() {
    const [isAuth, setIsAuth] = useState(false);
    const [isLoading, setLoading] = useState(true);

    /*Проверка авторизован пользователь или нет*/
    useEffect(() => {
        if (localStorage.getItem('auth')) {
            setIsAuth(true)
        }
        setLoading(false);
    }, [])

    return (
        /*AuthContext искать в content/index.js*/
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <AuthContext.Provider value={{
            isAuth,
            setIsAuth,
            isLoading
        }}>
            {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <BrowserRouter>
                {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <Navbar/>
                {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <AppRouter/>
            </BrowserRouter>
        </AuthContext.Provider>
    )
}

export default App;
