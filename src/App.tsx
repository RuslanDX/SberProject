import React, {useEffect, useState, FC} from 'react';
import './styles/App.css';
import {BrowserRouter,Route, NavLink} from "react-router-dom";
import Navbar from "./components/UI/Navbar/Navbar";
import AppRouter from "./components/AppRouter";
import {AuthContext} from "./context";
import Posts from "./pages/Posts";
import PostIdPage from "./pages/PostIdPage";
import Error from "./pages/Error";
import About from "./pages/About";



const App = () => {
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

        <AuthContext.Provider value={{
            isAuth,
            setIsAuth,
            isLoading}}>

            <BrowserRouter>
                <div>
                    <Navbar />
                    <AppRouter/>
                </div>
            </BrowserRouter>
            {/*<BrowserRouter>*/}
            {/*    <div>*/}
            {/*        <div>*/}
            {/*            /!*<NavLink to="/about">О сайте</NavLink>*!/*/}
            {/*            /!*<NavLink to='/posts'>Список</NavLink>*!/*/}
            {/*            <Navbar />*/}
            {/*        </div>*/}
            {/*        <Route path={'/about'} exact>*/}
            {/*            <About/>*/}
            {/*        </Route>*/}
            {/*        <Route path={'/posts'} exact>*/}
            {/*            <Posts/>*/}
            {/*        </Route>*/}
            {/*        <Route path={'/posts/:id'}>*/}
            {/*            <PostIdPage/>*/}
            {/*        </Route>*/}
            {/*        <Route path={'/error'}>*/}
            {/*            <Error/>*/}
            {/*        </Route>*/}
            {/*    </div>*/}
            {/*</BrowserRouter>*/}

        </AuthContext.Provider>

    );
}

export default App;
