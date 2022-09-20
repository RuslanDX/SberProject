import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import {AuthContext} from "../../../context";

const Navbar = () => {
    // const {isAuth, setIsAuth} = useContext(AuthContext);
    //
    // const logout = () => {
    //     setIsAuth(false);
    //     localStorage.removeItem('auth')
    // }

    return (
        <div className="navbar">

            <div className="navbar__links">
                <Link className='linkText' style={{marginLeft:'20px'}} to="/about" >О сайте</Link>
                <Link className='linkText' to="/posts">События</Link>
            </div>

        </div>
    );
};

export default Navbar;
