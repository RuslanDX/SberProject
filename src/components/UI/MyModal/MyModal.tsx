// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React from 'react';
// @ts-expect-error TS(2307): Cannot find module './MyModal.module.css' or its c... Remove this comment to see the full error message
import cl from './MyModal.module.css';

const MyModal = ({
    children,
    visible,
    setVisible
}: any) => {

    const rootClasses = [cl.myModal]

    if (visible) {

        rootClasses.push(cl.active);
    }

    return (
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
            {/* @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
            <div className={cl.myModalContent} onClick={(e: any) => e.stopPropagation()}>
                {children}
            {/* @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
            </div>
        {/* @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
        </div>
    );
};

export default MyModal;
