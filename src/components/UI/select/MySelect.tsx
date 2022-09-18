// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React from 'react';
import './MySelect.css'

const MySelect = ({
    options,
    defaultValue,
    value,
    onChange
}: any) => {
    return (
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        <select
            className="mySelect"
            value={value}
            onChange={(event: any) => onChange(event.target.value)}
        >
            {/* @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
            <option disabled value="">{defaultValue}</option>
            {/* @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
            {options.map((option: any) => <option key={option.value} value={option.value}>
                {option.name}
            {/* @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
            </option>
            )}
        {/* @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
        </select>
    );
};

export default MySelect;
