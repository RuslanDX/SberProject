// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React, {useContext} from 'react';
// @ts-expect-error TS(6142): Module './PostItem' was resolved to 'C:/Users/roma... Remove this comment to see the full error message
import PostItem from "./PostItem";
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import {TransitionGroup, CSSTransition} from "react-transition-group";
import {AuthContext} from "../context";
// @ts-expect-error TS(6142): Module './UI/Loader/Loader' was resolved to 'C:/Us... Remove this comment to see the full error message
import Loader from "./UI/Loader/Loader";

const PostList = ({
    posts,
    title,
    remove
}: any) => {

    const {isAuth, isLoading} = useContext(AuthContext);
    if ((!posts.length)&&(isLoading == false)) {
        return (
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <div style={{textAlign: 'center',width:'100%'}}>
                {/* @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
                <h1 className="logo-1">Автомобили не найдены</h1>
            {/* @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
            </div>
        )
    }

    return (
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        <div>

            {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <TransitionGroup>
                {posts.map((post: any, index: any) =>
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <CSSTransition
                        key={post.id}
                        timeout={500}
                        classNames="post"
                    >
                        {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                        <PostItem remove={remove} number={index + 1} post={post} />
                    </CSSTransition>
                )}
            </TransitionGroup>
        {/* @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
        </div>
    );
};

export default PostList;
