// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React from 'react';
// @ts-expect-error TS(6142): Module './UI/input/MyInput' was resolved to 'C:/Us... Remove this comment to see the full error message
import MyInput from "./UI/input/MyInput";
// @ts-expect-error TS(6142): Module './UI/select/MySelect' was resolved to 'C:/... Remove this comment to see the full error message
import MySelect from "./UI/select/MySelect";


const PostFilter = ({
    filter,
    setFilter
}: any) => {
    return (
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        <div>
            {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <MyInput
                value={filter.query}
                onChange={(e: any) => setFilter({...filter, query: e.target.value})}
                placeholder="Поиск..."
            />
            {/*---------------Сортировка---------------*/}
            {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <MySelect
                value={filter.sort}
                onChange={(selectedSort: any) => setFilter({...filter, sort: selectedSort})}
                defaultValue="Сортировка"
                options={[
                    {value: 'model', name: 'По модели'},
                    {value: 'number', name: 'По номеру'},
                    {value: 'owner', name: 'По владельцу'},
                    {value: 'mileage', name: 'По пробегу'},
                ]}
            />
        {/* @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
        </div>
    );
};

export default PostFilter;
