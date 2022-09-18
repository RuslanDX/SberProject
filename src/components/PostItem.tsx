// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React from 'react';
// @ts-expect-error TS(6142): Module './UI/button/MyButton' was resolved to 'C:/... Remove this comment to see the full error message
import MyButton from "./UI/button/MyButton";
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import {useHistory} from 'react-router-dom';

const PostItem = (props: any) => {
    const router = useHistory()

    return (
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        <div className="post">
            {/* @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
            <div className="post__content">
                {/* @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
                <strong>{props.post.model}</strong>
                {/* @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
                <div>
                    {props.post.owner}
                {/* @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
                </div>
            {/* @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
            </div>
            {/* @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
            <div className="post__btns">
                {/*Динамический адрес для перехода между постами*/}
                {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <MyButton style={{marginRight: 4}} onClick={() => router.push(`/posts/${props.post.id}`)}>
                    Открыть
                </MyButton>
                {/*<MyButton onClick={() => props.remove(props.post)}>*/}
                {/*    Удалить*/}
                {/*</MyButton>*/}
            {/* @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
            </div>
        {/* @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
        </div>
    );
};

export default PostItem;
