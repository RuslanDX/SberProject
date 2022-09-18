// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React from 'react';
// @ts-expect-error TS(2307): Cannot find module './MyButton.module.css' or its ... Remove this comment to see the full error message
import classes from './MyButton.module.css';

const MyButton = ({
    children,
    ...props
}: any) => {
    return (
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        <button {...props} className={classes.myBtn}>
            {children}
        {/* @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
        </button>
    );
};

export default MyButton;
