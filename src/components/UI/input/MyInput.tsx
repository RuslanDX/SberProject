// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React from 'react';
// @ts-expect-error TS(2307): Cannot find module './MyInput.module.css' or its c... Remove this comment to see the full error message
import classes from './MyInput.module.css';

const MyInput = React.forwardRef((props: any, ref: any) => {
    return (
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        <input ref={ref} className={classes.myInput} {...props}/>
    );
});

export default MyInput;
