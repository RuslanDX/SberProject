import React, {useContext} from 'react';
import PostItem from "./PostItem";
import {TransitionGroup, CSSTransition} from "react-transition-group";
import {AuthContext} from "../context";
import Loader from "./UI/Loader/Loader";

const PostList = ({posts, title, remove}) => {

    const {isAuth, isLoading} = useContext(AuthContext);
    if ((!posts.length)&&(isLoading == false)) {
        return (
            <div style={{textAlign: 'center',width:'100%'}}>
                <h1 className="logo-1">Автомобили не найдены</h1>
            </div>
        )
    }

    return (
        <div>

            <TransitionGroup>
                {posts.map((post, index) =>
                    <CSSTransition
                        key={post.id}
                        timeout={500}
                        classNames="post"
                    >
                        <PostItem remove={remove} number={index + 1} post={post} />
                    </CSSTransition>
                )}
            </TransitionGroup>
        </div>
    );
};

export default PostList;
