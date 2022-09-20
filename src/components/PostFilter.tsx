import React from 'react';
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";


const PostFilter = ({
    filter,
    setFilter
}: any) => {
    return (
        <div>
            <MyInput
                value={filter.query}
                onChange={(e: any) => setFilter({...filter, query: e.target.value})}
                placeholder="Search..."
            />
            {/*---------------Сортировка---------------*/}
            <MySelect
                value={filter.sort}
                onChange={(selectedSort: any) => setFilter({...filter, sort: selectedSort})}
                defaultValue="Sort..."
                options={[
                    {value: 'model', name: 'По модели'},
                    {value: 'number', name: 'По номеру'},
                    {value: 'owner', name: 'По владельцу'},
                    {value: 'mileage', name: 'По пробегу'},
                ]}
            />
        </div>
    );
};

export default PostFilter;
