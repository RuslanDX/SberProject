import React, {useContext} from 'react';
import PostItem from "./PostItem";
import {TransitionGroup, CSSTransition} from "react-transition-group";
import {AuthContext} from "../context";
import Loader from "./UI/Loader/Loader";

const PostList = ({
    posts,
    title,
    remove
}: any) => {

    //const {isAuth, isLoading} = useContext(AuthContext);
    //const isAuth = useContext(AuthContext);
    const isLoading = useContext(AuthContext);
    if ((!posts.length)&&(isLoading == false)) {
        return (
            <div style={{textAlign: 'center',width:'100%'}}>
                <h1 className="logo-1">No cars</h1>
            </div>
        )
    }

    return (
        <div>

            <TransitionGroup>
                {posts.map((post: any, index: any) =>
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
