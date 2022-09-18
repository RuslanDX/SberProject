import React from 'react';
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";


const PostFilter = ({filter, setFilter}) => {
    return (
        <div>
            <MyInput
                value={filter.query}
                onChange={e => setFilter({...filter, query: e.target.value})}
                placeholder="Поиск..."
            />
            {/*---------------Сортировка---------------*/}
            <MySelect
                value={filter.sort}
                onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                defaultValue="Сортировка"
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
