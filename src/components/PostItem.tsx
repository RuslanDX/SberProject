import React from 'react';
import MyButton from "./UI/button/MyButton";
import {useHistory} from 'react-router-dom';

const PostItem = (props) => {
    const router = useHistory()

    return (
        <div className="post">
            <div className="post__content">
                <strong>{props.post.model}</strong>
                <div>
                    {props.post.owner}
                </div>
            </div>
            <div className="post__btns">
                {/*Динамический адрес для перехода между постами*/}
                <MyButton style={{marginRight: 4}} onClick={() => router.push(`/posts/${props.post.id}`)}>
                    Открыть
                </MyButton>
                {/*<MyButton onClick={() => props.remove(props.post)}>*/}
                {/*    Удалить*/}
                {/*</MyButton>*/}
            </div>
        </div>
    );
};

export default PostItem;
