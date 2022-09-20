import React, {FC} from 'react';

const Error:FC = () => {
    return (
        <div>
            <h1 style={{color: 'red'}}>
                Вы перешли на несуществующую страницу!
            </h1>
        </div>
    );
};

export default Error;
