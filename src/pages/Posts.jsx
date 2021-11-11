import React, {useEffect, useRef, useState} from 'react';

import Menu from "../components/UI/Menu/Menu";


function Posts() {

    const [menuActive, setMenuActive] = useState(false)

    /*Здесь будет находиться выпадающее меню. В браузере: Materialize css. Для загрузки пакета: npm install materialize-css@next*/
    return (
        <div className="App">

            <div className="ramka">
            {/*<nav>*/}
                <div className="nav_but" onClick={()=>setMenuActive(!menuActive)}>
                    <span/>
                </div>
            {/*</nav>*/}
            </div>

            <Menu active={menuActive} setActive={setMenuActive} header = {"Список событий"}/>


        </div>
    );
}

export default Posts;
